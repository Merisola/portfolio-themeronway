import React from "react";
import styles from "./AboutMe.module.css";
import photo1 from "../../assets/img/photo_1.jpg";

const About = () => {
  const values = [
    "Trustworthiness",
    "Quality",
    "Creativity",
    "Collaboration",
    "Project Management",
    "Biomedical Engineering",
  ];

  return (
    <section id="about" className={`${styles.about} section lightBackground`}>
      {/* Section Title */}
      <div className="container" data-aos="fade-up">
        <span className={styles.tagBadge}>About Me</span>
        <h2>About Me</h2>
        <p>
          I am Meron Solomon, a full-stack developer, project manager, and
          biomedical engineer passionate about creating impactful solutions.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gy-5">
          {/* Image / Mission Card */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className={styles.aboutImageWrapper}>
              <img
                src={photo1}
                alt="Meron Solomon"
                className={`img-fluid rounded-4 ${styles.mainImage}`}
              />
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>
                  <i className="bi bi-lightbulb"></i>
                </div>
                <div className={styles.missionContent}>
                  <h4>My Purpose</h4>
                  <p>
                    Deliver innovative solutions combining technology, design,
                    and engineering to make a real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className={styles.aboutContent}>
              <div className={styles.tagBadge}>Professional Overview</div>
              <h2>A Journey Through Technology, Design & Engineering</h2>
              <div className={styles.aboutInfo}>
                <p>
                  I specialize in front-end and back-end development, project
                  management, and biomedical engineering solutions that make a
                  difference.
                </p>
                <p>
                  Continuous learning and collaboration drive me to stay at the
                  forefront of technology, design, and healthcare innovation.
                </p>
              </div>

              <h4 className={styles.valuesTitle}>Core Values</h4>
              <div className={styles.valuesList}>
                {values.map((value) => (
                  <div key={value} className={styles.valueItem}>
                    <div className={styles.valueIcon}>
                      <i className="bi bi-check2"></i>
                    </div>
                    <span className={styles.valueText}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
