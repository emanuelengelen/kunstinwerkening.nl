import React from "react";
import styles from "./LeftInfo.module.scss";

const LeftInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maker}></div>
      <div className={styles.line}></div>
      <div className={styles.markers}>
        <span>p</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.arrow}></div>
    </div>
  );
};

export default LeftInfo;
