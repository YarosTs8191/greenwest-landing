import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>Our services</p>

          <h2 className={styles.title}>
            Landscaping solutions tailored to your outdoor space
          </h2>

          <p className={styles.text}>
            We provide practical and visually clean landscaping services for
            homes and small businesses.
          </p>
        </div>

        <div className={styles.listWrapper}>
          {/* service cards will be added here */}
        </div>
      </div>
    </section>
  );
}

export default Services;
