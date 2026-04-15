import styles from "./About.module.css";
import aboutImg from "../../assets/images/IMG_2768.jpg";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>About us</p>

            <h2 className={styles.title}>
              Reliable landscaping services that transform your outdoor space
            </h2>

            <p className={styles.text}>
              With real hands-on experience in landscaping, we understand how
              important it is to keep outdoor spaces both practical and visually
              appealing.
            </p>

            <p className={styles.text}>
              We focus on delivering reliable service, clear communication, and
              results that make your space look clean, organized, and
              well-maintained.
            </p>

            <ul className={styles.list}>
              <li className={styles.item}>Hands-on industry experience</li>
              <li className={styles.item}>Clean and consistent results</li>
              <li className={styles.item}>Attention to client needs</li>
            </ul>
          </div>

          <div className={styles.imageBox}>
            <img src={aboutImg} alt="Lawn service" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
