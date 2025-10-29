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
          <div>
            <p>
              © 2025 <strong>MeriSola</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
