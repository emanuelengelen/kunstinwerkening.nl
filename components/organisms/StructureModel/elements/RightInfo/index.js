import React from "react";
import styles from "./RightInfo.module.scss";

const RightInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowWrapper}>
        <div>
          <div className={styles.line}></div>
          <div className={styles.markers}>abc</div>
          <div className={styles.line}></div>
          <div className={styles.arrow_right}></div>
        </div>

        <div>
          <div className={styles.arrow_left}></div>
          <div className={styles.line}></div>
          <div className={styles.markers}>
            <span>a</span>
            <span>a</span>
            <span>a</span>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={styles.maker}></div>
    </div>
  );
};

export default RightInfo;
