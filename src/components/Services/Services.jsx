import styles from "./Services.module.css";
import { services } from "../../data/services";

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
          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.id} className={styles.item}>
                <div className={styles.card}>
                  <span className={styles.icon}>{service.icon}</span>

                  <h3 className={styles.cardTitle}>{service.title}</h3>

                  <p className={styles.cardText}>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
