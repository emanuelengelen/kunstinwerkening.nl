import React from "react";
import "../styles/globals.scss";

import Header from "components/organisms/Header";
import StructureModel from "components/organisms/StructureModel";

const _App = () => {
  return (
    <main>
      <Header />
      <StructureModel />
    </main>
  );
};

export default _App;
