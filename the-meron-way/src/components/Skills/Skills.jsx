import React from "react";
import styles from "./Skills.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Skills = () => {
  const skills = [
    {
      title: "Front-End Development",
      icon: "bi bi-code-slash",
      description:
        "React, Next.js, HTML, CSS, Tailwind, Bootstrap, Responsive Design.",
    },
    {
      title: "Back-End / Full-Stack",
      icon: "bi bi-server",
      description:
        "Node.js, Express, MongoDB, Firebase, REST APIs, Database Management.",
    },
    {
      title: "Project Management",
      icon: "bi bi-people",
      description:
        "Agile Methodologies, Task Prioritization, Team Coordination, Remote Collaboration.",
    },
    {
      title: "Biomedical Engineering",
      icon: "bi bi-heart-pulse",
      description:
        "Medical Device Development, Data Analysis, Bioinstrumentation, Healthcare Solutions.",
    },
  ];

  return (
    <section id="skills" className={`${styles.skills} section`}>
      {/* Section Title */}
      <div className="container section-title">
        <span className={styles.descriptionTitle}>Skills</span>
        <h2>Skills & Expertise</h2>
        <p>
          Showcasing my technical, project management, and biomedical
          engineering expertise.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {skills.map((skill) => (
            <div key={skill.title} className="col-lg-3 col-md-6">
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
