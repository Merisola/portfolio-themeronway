import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader;
