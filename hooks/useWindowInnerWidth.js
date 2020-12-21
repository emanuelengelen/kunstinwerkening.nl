import React, { useState, useEffect } from "react";

const useWindowInnerWidth = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);

  const handleWindowResize = (event) => {
    setWindowInnerWidth(event.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowInnerWidth;
};

export default useWindowInnerWidth;
