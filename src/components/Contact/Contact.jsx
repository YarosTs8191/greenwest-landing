import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const initialErrors = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const validateForm = (formData) => {
    const newErrors = {
      name: "",
      phone: "",
      service: "",
      message: "",
    };

    const name = (formData.get("name") || "").trim();
    const phone = (formData.get("phone") || "").trim();
    const service = (formData.get("service") || "").trim();
    const message = (formData.get("message") || "").trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+\d\s()-]{7,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!service) {
      newErrors.service = "Please select a service.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if ((formData.get("website") || "").trim()) {
      return;
    }

    const newErrors = validateForm(formData);

    setErrors(newErrors);
    setIsSubmitted(false);
    setToast({ type: "", message: "" });

    const hasErrors = Object.values(newErrors).some((value) => value !== "");

    if (hasErrors) {
      return;
    }

    try {
      setIsSubmitting(true);

      formData.append("access_key", "4dda7295-baf1-42fb-8062-1fd1d5cc1583");
      formData.append("subject", "New landscaping request");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        setErrors(initialErrors);
        setIsSubmitted(true);
        setToast({
          type: "success",
          message: "Your request has been sent successfully.",
        });

        if (toastTimeoutRef.current) {
          clearTimeout(toastTimeoutRef.current);
        }

        toastTimeoutRef.current = setTimeout(() => {
          setIsSubmitted(false);
          setToast({ type: "", message: "" });
        }, 4000);
      } else {
        setToast({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
        setTimeout(() => {
          setToast({ type: "", message: "" });
        }, 4000);
      }
    } catch (error) {
      setToast({
        type: "error",
        message: "Network error. Please try again.",
      });
      setTimeout(() => {
        setToast({ type: "", message: "" });
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      {toast.message && (
        <div
          className={`${styles.toast} ${
            toast.type === "success" ? styles.toastSuccess : styles.toastError
          }`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          {toast.message}
        </div>
      )}

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>Contact us</p>

            <h2 className={styles.title}>
              Let’s talk about your outdoor space
            </h2>

            <p className={styles.text}>
              Get in touch to discuss your project, ask a question, or request a
              quote for landscaping services.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              className={styles.honeypot}
              aria-hidden="true"
            />

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className={styles.errorMessage}>
                  {errors.name}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Phone</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Your phone number"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className={styles.errorMessage}>
                  {errors.phone}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Service</span>
              <select
                className={styles.select}
                name="service"
                defaultValue=""
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="lawn care">Lawn care</option>
                <option value="garden design">Garden design</option>
                <option value="tree trimming">Tree trimming</option>
                <option value="full landscaping">Full landscaping</option>
              </select>
              {errors.service && (
                <span id="service-error" className={styles.errorMessage}>
                  {errors.service}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Message</span>
              <textarea
                className={styles.textarea}
                name="message"
                autoComplete="off"
                rows="5"
                placeholder="Tell us about your project"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className={styles.errorMessage}>
                  {errors.message}
                </span>
              )}
            </label>

            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.buttonContent}>
                  <span className={styles.spinner} aria-hidden="true"></span>
                  Sending...
                </span>
              ) : (
                "Request a quote"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
