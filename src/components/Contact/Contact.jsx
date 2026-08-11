import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const initialErrors = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function Contact() {
  const { t } = useTranslation();
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
      newErrors.name = t("contact.validation.nameRequired");
    }

    if (!phone) {
      newErrors.phone = t("contact.validation.phoneRequired");
    } else if (!/^[+\d\s()-]{7,20}$/.test(phone)) {
      newErrors.phone = t("contact.validation.phoneInvalid");
    }

    if (!service) {
      newErrors.service = t("contact.validation.serviceRequired");
    }

    if (!message) {
      newErrors.message = t("contact.validation.messageRequired");
    } else if (message.length < 10) {
      newErrors.message = t("contact.validation.messageTooShort");
    }

    return newErrors;
  };

  const clearToastAfterDelay = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToast({
        type: "success",
        message: t("contact.toast.success"),
      });
      setIsSubmitted(false);
    }, 4000);
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
          message: t("contact.toast.success"),
        });
        clearToastAfterDelay();
      } else {
        setToast({
          type: "error",
          message: result.message || t("contact.toast.error"),
        });
        clearToastAfterDelay();
      }
    } catch (error) {
      setToast({
        type: "error",
        message: t("contact.toast.networkError"),
      });
      clearToastAfterDelay();
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
            <p className={styles.label}>{t("contact.label")}</p>

            <h2 className={styles.title}>{t("contact.title")}</h2>

            <p className={styles.text}>{t("contact.text")}</p>
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
              <span className={styles.fieldLabel}>
                {t("contact.form.name.label")}
              </span>

              <input
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                placeholder={t("contact.form.name.placeholder")}
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
              <span className={styles.fieldLabel}>
                {t("contact.form.phone.label")}
              </span>

              <input
                className={styles.input}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder={t("contact.form.phone.placeholder")}
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
              <span className={styles.fieldLabel}>
                {t("contact.form.service.label")}
              </span>

              <select
                className={styles.select}
                name="service"
                defaultValue=""
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="" disabled>
                  {t("contact.form.service.placeholder")}
                </option>

                <option value="lawn care">
                  {t("contact.form.service.options.lawnCare")}
                </option>

                <option value="garden design">
                  {t("contact.form.service.options.gardenDesign")}
                </option>

                <option value="tree trimming">
                  {t("contact.form.service.options.treeTrimming")}
                </option>

                <option value="full landscaping">
                  {t("contact.form.service.options.fullLandscaping")}
                </option>
              </select>

              {errors.service && (
                <span id="service-error" className={styles.errorMessage}>
                  {errors.service}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                {t("contact.form.message.label")}
              </span>

              <textarea
                className={styles.textarea}
                name="message"
                autoComplete="off"
                rows="5"
                placeholder={t("contact.form.message.placeholder")}
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
                  {t("contact.button.sending")}
                </span>
              ) : (
                t("contact.button.submit")
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
