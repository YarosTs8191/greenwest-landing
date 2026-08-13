import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import styles from "./Header.module.css";

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the mobile menu when the Escape key is pressed.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.topBar}>
            <a className={styles.logo} href="#hero">
              {t("header.logo")}
            </a>

            <div className={styles.mobileActions}>
              <LanguageSwitcher />

              <button
                className={styles.burgerButton}
                type="button"
                aria-label={
                  isOpen ? t("header.closeMenu") : t("header.openMenu")
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>

          <nav
            className={styles.desktopNav}
            aria-label={t("header.mainNavigation")}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#hero">{t("header.navigation.home")}</a>
              </li>

              <li className={styles.navItem}>
                <a href="#services">{t("header.navigation.services")}</a>
              </li>

              <li className={styles.navItem}>
                <a href="#about">{t("header.navigation.about")}</a>
              </li>

              <li className={styles.navItem}>
                <a href="#projects">{t("header.navigation.projects")}</a>
              </li>

              <li className={styles.navItem}>
                <a href="#contact">{t("header.navigation.contact")}</a>
              </li>
            </ul>
          </nav>

          <div className={styles.actions}>
            <LanguageSwitcher />
            <a className={styles.headerBtn} href="#contact">
              {t("header.quoteButton")}
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.backdrop} onClick={closeMenu}>
          <div
            id="mobile-menu"
            className={styles.mobileMenu}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              aria-label={t("header.closeMenu")}
              onClick={closeMenu}
            >
              ✕
            </button>

            <nav
              className={styles.mobileNav}
              aria-label={t("header.mobileNavigation")}
            >
              <ul className={styles.mobileNavList}>
                <li className={styles.navItem}>
                  <a href="#hero" onClick={closeMenu}>
                    {t("header.navigation.home")}
                  </a>
                </li>

                <li className={styles.navItem}>
                  <a href="#services" onClick={closeMenu}>
                    {t("header.navigation.services")}
                  </a>
                </li>

                <li className={styles.navItem}>
                  <a href="#about" onClick={closeMenu}>
                    {t("header.navigation.about")}
                  </a>
                </li>

                <li className={styles.navItem}>
                  <a href="#projects" onClick={closeMenu}>
                    {t("header.navigation.projects")}
                  </a>
                </li>

                <li className={styles.navItem}>
                  <a href="#contact" onClick={closeMenu}>
                    {t("header.navigation.contact")}
                  </a>
                </li>
              </ul>
            </nav>

            <a className={styles.mobileBtn} href="#contact" onClick={closeMenu}>
              {t("header.mobileQuoteButton")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
