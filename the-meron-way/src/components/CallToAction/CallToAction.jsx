import React from "react";
import styles from "./CallToAction.module.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="call-to-action" className={styles.callToAction}>
      <div className="container">
        <div className={styles.ctaWrapper}>
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-7">
              <div className={styles.ctaContent}>
                <span className={styles.badge}>Experienced Developer</span>
                <h2 className="mt-4 mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="mb-4">
                  I’m Meron Solomon, a full-stack developer with 2+ years of
                  experience in web development, project management, and
                  biomedical engineering. I love helping and working with
                  passionate clients to bring ideas to life.
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className={styles.benefitItem}>
                      <div className={styles.iconBox}>
                        <i className="bi bi-briefcase-fill"></i>
                      </div>
                      <div>
                        <h5>2+ Years Experience</h5>
                        <p>Professional development and project management.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={styles.benefitItem}>
                      <div className={styles.iconBox}>
                        <i className="bi bi-award-fill"></i>
                      </div>
                      <div>
                        <h5>Certificates</h5>
                        <p>
                          Check my achievements <Link to="/resume">here</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <a href="#contact" className="btn btn-primary">
                    Hire Me
                  </a>
                  <a href="#contact" className="btn btn-outline-secondary">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Image / Illustration */}
            <div className="col-lg-5">
              <div className={styles.ctaImage}>
                <img
                  src="/assets/img/hero/meron-portfolio.webp"
                  alt="Meron Solomon Portfolio"
                  className="img-fluid"
                />
                <div className={styles.floatingBadge}>
                  <i className="bi bi-star-fill"></i>
                  <span>2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
