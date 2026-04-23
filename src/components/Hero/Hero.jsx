import styles from "./Hero.module.css";
import heroImg from "../../assets/images/portfolphot2.jpg";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>Professional landscaping service</p>

            <h1 className={styles.title}>
              We create clean and beautiful outdoor spaces
            </h1>

            <p className={styles.text}>
              Reliable landscaping solutions for homes and small businesses.
            </p>

            <a className={styles.button} href="#contact">
              Request a quote
            </a>
          </div>

          <div className={styles.imageBox}>
            <img
              src={heroImg}
              alt="Completed landscaping project with decorative spiral trees"
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
