import { useTranslation } from "react-i18next";

import styles from "./About.module.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>{t("about.label")}</p>

            <h2 className={styles.title}>{t("about.title")}</h2>

            <p className={styles.text}>{t("about.text1")}</p>

            <p className={styles.text}>{t("about.text2")}</p>

            <ul className={styles.list}>
              <li className={styles.item}>{t("about.items.experience")}</li>
              <li className={styles.item}>{t("about.items.results")}</li>
              <li className={styles.item}>{t("about.items.clientNeeds")}</li>
            </ul>
          </div>

          <div className={styles.imageBox}>
            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
