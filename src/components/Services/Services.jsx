import styles from "./Services.module.css";
import { services } from "../../data/services";

import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>{t("services.label")}</p>

          <h2 className={styles.title}>{t("services.title")}</h2>

          <p className={styles.text}>{t("services.text")}</p>
        </div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.id} className={styles.item}>
                <div className={styles.card}>
                  <span className={styles.icon}>{service.icon}</span>

                  <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>

                  <p className={styles.cardText}>{t(service.descriptionKey)}</p>
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
