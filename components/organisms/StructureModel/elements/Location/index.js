import React, { useEffect, useState } from "react";
import styles from "./Location.module.scss";
import useWindowInnerWidth from "hooks/useWindowInnerWidth";

const Location = ({ children }) => {
  const [containerRect, setContainerRect] = useState({
    width: 500,
    height: 400,
  });
  const windowInnerWidth = useWindowInnerWidth();

  useEffect(() => {
    setContainerRect({ width: 500, height: 400 });
  }, [windowInnerWidth]);

  const stroke = 1;

  const pathTwo = `
  M${containerRect.width - stroke},${stroke}
  L${stroke + 110},${stroke}
  L${stroke},${110}
  L${stroke},${containerRect.height - stroke}
  L${containerRect.width - 110},${containerRect.height - stroke}
  L${containerRect.width},${containerRect.height - 110}
  L${containerRect.width - stroke},${containerRect.height - 110}
  Z`;

  const pathInner = `
  M110,0
  L110,${containerRect.height - 110}
  L0,${containerRect.height}
  M110,${containerRect.height - 110}
  L${containerRect.width}, ${containerRect.height - 110}
  `;

  const pathOuter = `
    M${containerRect.width - 110},${containerRect.height}
    l0,-${containerRect.height - 110}
    m110,-110
    l-${110},110
    l-${containerRect.width - 110},0
  `;

  return (
    <div
      className={styles.locationContainer}
      style={{
        width: `${containerRect.width}px`,
        height: `${containerRect.height}px`,
      }}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <svg
          className={styles.locationSvg}
          width="100%"
          height="100%"
          viewBox={`0 0 ${containerRect.width} ${containerRect.height}`}
        >
          <path vectorEffect="non-scaling-stroke" d={pathTwo} />

          <path
            style={{ strokeWidth: "1px" }}
            vectorEffect="non-scaling-stroke"
            d={pathInner}
          />

          {children}

          <path
            style={{ opacity: "0.3", strokeWidth: "1px" }}
            vectorEffect="non-scaling-stroke"
            d={pathOuter}
          />
        </svg>
      </div>
    </div>
  );
};

export default Location;
