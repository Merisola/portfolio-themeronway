import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`${styles.header} d-flex align-items-center ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="#hero"
          className="logo d-flex align-items-center text-decoration-none"
        >
          {/* Optional: replace text with an image later if you want */}
          {/* <img src="/assets/img/logo.webp" alt="MeriSola Logo" /> */}
          <h1 className="sitename mb-0">MeriSola</h1>
        </a>

        {/* Navbar Component */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
