import React, { useState, useRef, useEffect } from "react";

import styles from "./StructureModel.module.scss";

import Location from "./elements/Location";

import LeftInfo from "./elements/LeftInfo";
import RightInfo from "./elements/RightInfo";

import useWindowInnerWidth from "hooks/useWindowInnerWidth";

const StructureModel = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const windowInnerWidth = useWindowInnerWidth();

  useEffect(() => {
    if (containerRef.current.clientWidth / 1240 < 1) {
      setScale(containerRef.current.clientWidth / 1240);
    }
  }, [windowInnerWidth]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div
        className={styles.structure_grid}
        style={{ transform: `scale(${scale})` }}
      >
        <div className={styles.structure_grid__item}>
          <LeftInfo />
        </div>

        <Location>
          <path
            style={{ opacity: "1", strokeWidth: "4px", stroke: "red" }}
            vectorEffect="non-scaling-stroke"
            d={"M0 0 L75 200 L225 200 Z"}
          />
        </Location>

        <div className={styles.structure_grid__item}>
          <RightInfo />
        </div>
      </div>
    </div>
  );
};

export default StructureModel;
