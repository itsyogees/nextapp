import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionContent}>
          <h1>ABOUT US</h1>
          <p>
            <Link href="/" legacyBehavior>
              <a>HOME</a>
            </Link>{" "}
            / ABOUT US
          </p>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImg}>
             <Image src={"/image/about3 (1).jpg"} width={500} height={100}/>
          </div>
          <div className={styles.aboutText}>
          <div className={styles.aboutTextContainer}>
            <div className={styles.aboutTextHead}>
              <p>ABOUT COMPANY</p>
            </div>
            <div className={styles.aboutTextTitle}>
              <h1>Our Company Since 2024</h1>
            </div>
            <div className={styles.aboutTextContent}>
              <p>
                Continually evolve professional intellectual capital without
                enterprise users. Seamlessly matrix value added e-commerce.
                Uniquely e-enable innovative technologies via team.
              </p>
            </div>
            <div className={styles.aboutTextPoints}>
            <div className={styles.aboutTextPoint}>
                <ul>
                    <li>Psychodynamic Therapy</li>
                    <li>Couple Problem Therapy</li>
                </ul>
            </div>
            <div className={styles.aboutTextPoint}>
                <ul>
                    <li>Psychodynamic Therapy</li>
                    <li>Couple Problem Therapy</li>
                </ul>
            </div>
            </div>
           
            <div className={styles.aboutBtn}>
              <a href="/AboutPage" className={styles.moreAbout}>More About</a>
            </div>
            </div>
          </div>
        </div>

       

      
      </div>
    </div>
  );
};

export default AboutPage;
