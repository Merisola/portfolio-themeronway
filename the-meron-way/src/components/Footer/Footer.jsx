import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            MeriSola
          </a>
          <p>
            Full-Stack Developer | React & Bootstrap | Remote Tech Professional
            | Biomedical Engineer
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://x.com/TheMeronWay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://github.com/Merisola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/merontsegay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://t.me/Danytt00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © 2025 <strong>MeriSola</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
