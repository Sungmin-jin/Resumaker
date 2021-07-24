import React from "react";

import BannerSlider from "./BannerSlider";
import ThemeButton from "components/CommonComponent/ThemeButton";

const TopBanner = () => {
  return (
    <section className="topBanner-container">
      <div className="topBanner-left">
        <header className="topBanner-header">
          Make your dreams come true with Resumaker
        </header>
        <ThemeButton className="" to="/template-list">
          CHOOSE A FREE TEMPLATE
        </ThemeButton>
      </div>
      <div className="topBanner-right">
        <BannerSlider />
      </div>
    </section>
  );
};

export default TopBanner;
