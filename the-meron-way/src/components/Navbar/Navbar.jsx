import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileActive(!mobileActive);
  };

  const handleScroll = (e, targetId) => {
    setMobileActive(false);

    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      id="navmenu"
      className={`${styles.navmenu} ${
        mobileActive ? styles["mobile-nav-active"] : ""
      }`}
    >
      <ul
        className={`list-unstyled d-flex flex-column flex-xl-row gap-4 mb-0 ${styles.navList}`}
      >
        <li>
          {location.pathname === "/" ? (
            <a
              href="#hero"
              className="text-decoration-none"
              onClick={(e) => handleScroll(e, "hero")}
            >
              Home
            </a>
          ) : (
            <Link
              to="/"
              className="text-decoration-none"
              onClick={() => setMobileActive(false)}
            >
              Home
            </Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a
              href="#about"
              className="text-decoration-none"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </a>
          ) : (
            <Link
              to="/#about"
              className="text-decoration-none"
              onClick={() => setMobileActive(false)}
            >
              About
            </Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a
              href="#skills"
              className="text-decoration-none"
              onClick={(e) => handleScroll(e, "skills")}
            >
              Skills
            </a>
          ) : (
            <Link
              to="/#skills"
              className="text-decoration-none"
              onClick={() => setMobileActive(false)}
            >
              Skills
            </Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a
              href="#portfolio"
              className="text-decoration-none"
              onClick={(e) => handleScroll(e, "portfolio")}
            >
              Portfolio
            </a>
          ) : (
            <Link
              to="/#portfolio"
              className="text-decoration-none"
              onClick={() => setMobileActive(false)}
            >
              Portfolio
            </Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a
              href="#contact"
              className="text-decoration-none"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="text-decoration-none"
              onClick={() => setMobileActive(false)}
            >
              Contact
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile nav toggle */}
      <i
        className={`mobile-nav-toggle d-xl-none bi bi-list ${styles.mobileToggle}`}
        onClick={toggleMobileNav}
      ></i>
    </nav>
  );
};

export default Navbar;
