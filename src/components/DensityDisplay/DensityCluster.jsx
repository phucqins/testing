import React from "react";
import styles from "./density-cluster.module.css";
import Density from "./Density";
import IconTwoUsers from "../../icons/IconTwoUsers";
import IconThreeUsers from "../../icons/IconTwoUsers";
import IconOneUser from "../../icons/IconOneUser";

const DensityCluster = (props) => {
  const { type, numerator, denominator } = props;

  let title, children;

  switch (type) {
    case "personal":
      title = "ORK cá nhân";
      children = <IconOneUser />;
      break;
    case "department":
      title = "ORK bộ phận";
      children = <IconTwoUsers />;

      break;
    default:
      title = "ORK phòng ban";
      children = <IconThreeUsers />;
  }

  return (
    <div className={styles.container}>
      {children}
      <div className={styles["right-part"]}>
        <p className={styles.title}>{title}</p>
        <Density numerator={numerator} denominator={denominator} />
      </div>
    </div>
  );
};

export default DensityCluster;
