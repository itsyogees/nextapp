import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link"; 
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <div className={styles.footerLogoHead}>
            <h2>Logo</h2>
          </div>

          <p>
            Completely promote interdependent systems for Latest update news
            this Medical.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkHead}>
            <h2>Company Link</h2>
          </div>
          <ul>
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/AboutPage">About Us</Link>
            </li>
            <li>
              <Link href="/ServicePage">Our Service</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact</Link>
            </li>
            <li>
              <Link href="/CareerPage">Career</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
            <div className={styles.contactInfoHead}>
                <h2>Contact</h2>
            </div>
            <p>102/ B Street, New Elephant Road, Sandigo, USA</p>
            <div className={styles.contactInfoHead}>
                <h2>Email-US</h2>
            </div>
            <p>example@gmail.com</p>
            <div className={styles.contactInfoHead}>
                <h2>Call Now</h2>
            </div>
            <p>+123 (4567) - 890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
