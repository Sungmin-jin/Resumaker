import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Carousel} from "react-responsive-carousel";
import {imagesForTopBannerSlider} from "../../mock-data";

const BannerSlider = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
    >
      {imagesForTopBannerSlider.map((img, index) => (
        <img key={index} src={img} alt={`img${index}`} />
      ))}
    </Carousel>
  );
};

export default BannerSlider;
