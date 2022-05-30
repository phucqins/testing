import React from "react";
import styles from "./density.module.css";

const getColor = (value) => {
  if (value < 30) return "low";
  if (value > 70) return "high";
  return "medium";
};

const Density = (props) => {
  const { numerator, denominator } = props;

  return (
    <div className={styles.density}>
      <span className={`${styles["before"]} ${styles[getColor(numerator)]}`}>
        {numerator}
        <i className={styles.small}>%</i>
      </span>
      <span> / </span>
      <span className={styles.after}>
        {denominator}
        <i className={styles.small}>%</i>
      </span>
    </div>
  );
};

export default Density;
