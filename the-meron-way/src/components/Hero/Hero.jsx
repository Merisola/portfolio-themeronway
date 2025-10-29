import React from "react";
import styles from "./Hero.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import photo2 from "../../assets/img/photo_2.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div
            className={`col-lg-6 ${styles.heroContent}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.subtitle}>
              <span>Meron Solomon</span>
            </div>

            <h1 className={styles.title}>
              THE <span className={styles.highlight}>MERON</span> WAY
            </h1>

            <p className={styles.tagline}>
              Full-Stack Developer | Project Manager | Passionate Engineer
            </p>

            <div className={`${styles.socialLinks} social-links pb-4 fs-2`}>
              <a
                href="https://x.com/TheMeronWay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://github.com/Merisola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/merontsegay/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://t.me/Danytt00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>
            </div>

            <div className={styles.heroButtons}>
              <Link
                to="/resume"
                className={`btn btn-primary ${styles.primaryBtn}`}
              >
                Resume <i className="bi bi-chevron-right"></i>
              </Link>

              <a
                href="#portfolio"
                className={`btn btn-outline-secondary ${styles.secondaryBtn}`}
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`col-lg-6 ${styles.heroVisual}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.imageWrapper}>
              <img
                src={photo2}
                alt="Meron Solomon, Front-End Developer and Biomedical Engineer"
                className={styles.mainImage}
                loading="lazy"
              />

              <div className={`${styles.floatingElement} ${styles.topLeft}`}>
                <i className="bi bi-moon-stars-fill"></i>
              </div>
              <div
                className={`${styles.floatingElement} ${styles.bottomRight}`}
              >
                <i className="bi bi-code-slash"></i>
              </div>

              <div className={styles.experienceBadge}>
                <span className={styles.years}>2+</span>
                <span className={styles.text}>Years of Experience</span>
              </div>
            </div>

            <div className={styles.clientCounter}>
              <div className={styles.counterNumber}>
                <span>🤗</span>
              </div>
              <div className={styles.counterText}>
                <span>Happy Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
