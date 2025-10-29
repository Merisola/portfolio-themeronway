import React from "react";
import styles from "./Resume.module.css";

function Resume() {
  const embedLink =
    "https://docs.google.com/document/d/1b1cIeWg_vNa51WRklokYds1uNNJ3kkH-zHp_pcKGPHs/preview";

  return (
    <section id="resume" className={`${styles.resume} section`}>
      <div className={`container ${styles.sectionTitle}`} data-aos="fade-up">
        <span className={styles.descriptionTitle}>My Journey</span>
        <h2>Resume</h2>
        <p>
          Here’s a look at my professional background and experiences. You can
          view it below or open the PDF for a clearer look.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className={styles.resumeContainer}>
          <iframe
            src={embedLink}
            title="Meron Solomon Resume"
            className={styles.resumeFrame}
            allowFullScreen
          ></iframe>

          <a
            href="https://docs.google.com/document/d/1b1cIeWg_vNa51WRklokYds1uNNJ3kkH-zHp_pcKGPHs/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnDownload}
          >
            <i className="bi bi-file-earmark-arrow-down"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
