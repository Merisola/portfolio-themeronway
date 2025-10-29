import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // CSS module

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileActive(!mobileActive);
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
          <a
            href="#hero"
            className="text-decoration-none"
            onClick={() => setMobileActive(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-decoration-none"
            onClick={() => setMobileActive(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-decoration-none"
            onClick={() => setMobileActive(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-decoration-none"
            onClick={() => setMobileActive(false)}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-decoration-none"
            onClick={() => setMobileActive(false)}
          >
            Contact
          </a>
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
