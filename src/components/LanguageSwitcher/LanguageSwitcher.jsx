import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className={styles.languageSwitcher} aria-label="Language switcher">
      <button
        type="button"
        className={i18n.language === "en" ? styles.activeLanguage : undefined}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>

      <button
        type="button"
        className={i18n.language === "es" ? styles.activeLanguage : undefined}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>

      <button
        type="button"
        className={i18n.language === "ca" ? styles.activeLanguage : undefined}
        onClick={() => changeLanguage("ca")}
      >
        CA
      </button>
    </div>
  );
}

export default LanguageSwitcher;
