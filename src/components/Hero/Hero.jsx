import styles from "./Hero.module.css";
import heroImg from "../../assets/images/portfolphot2.jpg";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
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
              Get a quote
            </a>
          </div>

          <div className={styles.imageBox}>
            <img
              src={heroImg}
              alt="Landscaping work example"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
