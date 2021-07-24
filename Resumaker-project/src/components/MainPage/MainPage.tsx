import React from "react";

import TopBanner from "./TopBanner";
import PopularTemplates from "./PopularTemplates";
import Steps from "./Steps";
import Feature from "./Feature";

const MainPage = () => {
  return (
    <section className="mainpage-container">
      <TopBanner />
      <Steps />
      <Feature />
      <PopularTemplates />
    </section>
  );
};

export default MainPage;
