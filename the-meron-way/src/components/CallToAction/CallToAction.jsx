import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./CallToAction.module.css";

const CTA = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${targetId}`);
      // small delay to allow DOM to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section id="cta" className={styles.callToAction}>
      <div className={styles.ctaWrapper}>
        <h2 className={styles.headline}>Step Outside the Ordinary</h2>

        <p className={styles.quote}>
          “Move out of your comfort zone. You can only grow if you are willing
          to feel awkward and uncomfortable when you try something new.”
          <span>- Brian Tracy</span>
        </p>

        <p className={styles.bodyText}>
          I’m all about exploring, creating, and connecting with people who want
          to make something that matters. Whether it’s a bold project, a
          creative idea, or a tiny spark of change—let’s bring it to life.
        </p>

        <p className={styles.closingLine}>
          So hit me up if you’re one of the different.
        </p>

        <div className={styles.buttons}>
          <Link
            to="/#contact"
            onClick={(e) => handleClick(e, "contact")}
            className={`${styles.btn} ${styles.primary}`}
          >
            Let’s Work Together
          </Link>
          <Link
            to="/#portfolio"
            onClick={(e) => handleClick(e, "portfolio")}
            className={`${styles.btn} ${styles.outline}`}
          >
            See My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
