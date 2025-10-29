import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title, breadcrumb }) => {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.heading}>
        <h1>{title}</h1>
      </div>
      <nav>
        <ol>
          {breadcrumb.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
