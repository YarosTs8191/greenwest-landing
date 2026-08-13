import { useTranslation } from "react-i18next";

import styles from "./Hero.module.css";
import heroImg from "../../assets/images/portfolphot2.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>{t("hero.label")}</p>

            <h1 className={styles.title}>{t("hero.title")}</h1>

            <p className={styles.text}>{t("hero.text")}</p>

            <a className={styles.button} href="#contact">
              {t("hero.cta")}
            </a>
          </div>

          <div className={styles.imageBox}>
            <img
              src={heroImg}
              alt={t("hero.imageAlt")}
              className={styles.image}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
