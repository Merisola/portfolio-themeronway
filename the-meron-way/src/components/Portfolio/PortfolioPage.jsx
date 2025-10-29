import React from "react";
import styles from "./Portfolio.module.css";
import amazon from "../../assets/img/amazon.jpg";
import apple_react from "../../assets/img/apple_react.jpg";
import evangadi_forum from "../../assets/img/evangadi_forum.jpg";
import netflix from "../../assets/img/netflix.jpg";
import color from "../../assets/img/color.jpg";
import movie from "../../assets/img/movie.jpg";

const projects = [
  {
    title: "Amazon Clone",
    category: "Fullstack",
    img: amazon,
    demo: "https://amazon-clone-six-xi-93.vercel.app",
    repo: "https://github.com/Merisola/amazon-clone",
  },
  {
    title: "Color Game",
    category: "React Native",
    img: color,
    // demo: "https://color-game-demo.com",
    repo: "https://github.com/Merisola/color-guessing-game",
  },
  {
    title: "Netflix Clone",
    category: "Web App",
    img: netflix,
    demo: "https://netflix-clone-weld-nu.vercel.app/",
    repo: "https://github.com/Merisola/netflix-clone",
  },
  {
    title: "Apple Clone",
    category: "Web App",
    img: apple_react,
    // demo: "https://apple-clone-demo.com",
    repo: "https://github.com/Merisola/apple-clone",
  },
  {
    title: "Evangadi Forum",
    category: "Fullstack",
    img: evangadi_forum,
    demo: "https://evangadi-forum-demo.com",
    repo: "https://github.com/Merisola/evangadi-forum",
  },
  {
    title: "Movie Recommendations App",
    category: "Next.js Web App",
    img: movie,
    demo: "https://movie-recommendation-app-murex.vercel.app/",
    repo: "https://github.com/Merisola/movie-recommendation-app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <span className={styles.descriptionTitle}>Portfolio</span>
          <h2>My Work</h2>
          <p>
            Some of the projects I have built with React, React Native, and
            Fullstack development.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={styles.portfolioItem}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className={styles.portfolioInfo}>
                  <span className={styles.category}>{project.category}</span>
                  <h4>{project.title}</h4>
                  <div className={styles.portfolioLinks}>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
