import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.brandBlock}>
            <a className={styles.logo} href="#hero">
              GreenWest
            </a>

            <p className={styles.text}>{t("footer.description")}</p>
          </div>

          <div className={styles.contentFooter}>
            <div className={styles.navBlock}>
              <h3 className={styles.subtitle}>{t("footer.navigationTitle")}</h3>

              <ul className={styles.list}>
                <li>
                  <a className={styles.link} href="#hero">
                    {t("footer.navigation.home")}
                  </a>
                </li>

                <li>
                  <a className={styles.link} href="#services">
                    {t("footer.navigation.services")}
                  </a>
                </li>

                <li>
                  <a className={styles.link} href="#about">
                    {t("footer.navigation.about")}
                  </a>
                </li>

                <li>
                  <a className={styles.link} href="#projects">
                    {t("footer.navigation.projects")}
                  </a>
                </li>

                <li>
                  <a className={styles.link} href="#contact">
                    {t("footer.navigation.contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.contactBlock}>
              <h3 className={styles.subtitle}>{t("footer.contactTitle")}</h3>

              <ul className={styles.list}>
                <li>
                  <a
                    className={styles.link}
                    href="tel:+34624821948"
                    aria-label={t("footer.phoneAria")}
                  >
                    +34 624 82 19 48
                  </a>
                </li>

                <li>
                  <a
                    className={styles.link}
                    href="mailto:greenwestukr@gmail.com"
                    aria-label={t("footer.emailAria")}
                  >
                    greenwestukr@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.copy}>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
