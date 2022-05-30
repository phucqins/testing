import React from "react";
import styles from "./LoadingRing.module.css";

function LoadingRing(props) {
  const { size } = props;
  return (
    <div className={`${styles["lds-ring"]} ${styles[size]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingRing;
