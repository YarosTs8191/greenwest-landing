import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.brandBlock}>
            <a className={styles.logo} href="#hero">
              GreenWest
            </a>

            <p className={styles.text}>
              Practical landscaping services with attention to detail, clean
              results, and a modern approach.
            </p>
          </div>

          <div className={styles.contentFuter}>
            <div className={styles.navBlock}>
              <h3 className={styles.subtitle}>Navigation</h3>

              <ul className={styles.list}>
                <li>
                  <a className={styles.link} href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.contactBlock}>
              <h3 className={styles.subtitle}>Contact</h3>

              <ul className={styles.list}>
                <li>
                  <a className={styles.link} href="tel:+1234567890">
                    + (34) 624 82 1948
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="mailto:hello@greenwest.com">
                    greenwestukr@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.copy}>© 2026 GreenWest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
