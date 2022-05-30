import React from "react";
import styles from "./ProgressBar.module.css";

const getColor = (value) => {
  if (value < 30) return "#C60E02";
  if (value > 70) return "#41AC49";
  return "#F0B71C";
};

const ProgressBar = (props) => {
  let { percent, width, numerator, denominator } = props;

  percent = percent.toFixed(1);

  const containerStyles = {
    width: width,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: getColor(percent),
    borderRadius: "inherit",
  };

  return (
    <div className={styles.wrapper}>
      <div style={containerStyles} className={styles.container}>
        <div style={fillerStyles}></div>
      </div>
      <span className={styles.label}>{`${numerator}%/${denominator}%`}</span>
    </div>
  );
};

export default ProgressBar;
