import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Carousel} from "react-responsive-carousel";
import {imagesForPopularTemplateSlider} from "../../mock-data";

const PopularTemplates = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prev = (): void => {
    setCurrentSlide((prev: number) => prev - 1);
  };

  const next = (): void => {
    setCurrentSlide((prev: number) => prev + 1);
  };

  const updateCurrentSlide = (index: number): void => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="popularTemplates-container">
      <header className="popularTemplates-header">Top 5 Templates</header>
      <p className="popularTemplates-description">
        With{" "}
        <strong className="popularTemplates-description-resumaker">
          Resumaker
        </strong>
        , your journey starts here.
      </p>
      <p className="popularTemplates-description">
        Please be sure to explore all our templates and choose one just right
        for your next step!
      </p>

      <div className="popularTemplates-slider">
        <button
          type="button"
          className="popularTemplates-slider-button prev-button"
          onClick={prev}
        >
          <i className="fas fa-chevron-left fa-2x"> </i>
        </button>

        <Carousel
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          infiniteLoop={true}
          interval={1000}
          showIndicators={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          stopOnHover={false}
        >
          {imagesForPopularTemplateSlider.map((img, index) => (
            <img key={index} src={img} alt={`img${index}`} />
          ))}
        </Carousel>

        <button
          type="button"
          className="popularTemplates-slider-button next-button"
          onClick={next}
        >
          <i className="fas fa-chevron-right fa-2x"> </i>
        </button>
      </div>
    </section>
  );
};

export default PopularTemplates;
