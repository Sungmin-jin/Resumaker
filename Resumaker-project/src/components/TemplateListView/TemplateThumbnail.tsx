import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import ThemeButton from "../CommonComponent/ThemeButton";
import { Template } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "modules";
import { LOAD_REMAINING_THUMBNAILS } from "../../modules/templateSlider/actions";

const TemplateThumbnail = ({
  templateId,
  templateName,
  thumbnailImages,
}: Template) => {
  const thumbnailImagesLength = thumbnailImages.length;
  const [playOnHover, setPlayOnHover] = useState<boolean>(false);
  const loadRemainingThumbnails = useSelector(
    (state: RootReducerType) => state.templateSlider.loadRemainingThumbnails,
  );
  const dispatch = useDispatch();

  const imagePlaceHolderArray = new Array(thumbnailImagesLength - 1);
  const tempThumbnailImages = [...thumbnailImages]
    .slice(0, 1)
    .concat(imagePlaceHolderArray);

  return (
    <article className="templateThumbnail-container">
      <div
        onMouseEnter={() => {
          setPlayOnHover(true);
          dispatch({ type: LOAD_REMAINING_THUMBNAILS, payload: templateId });
        }}
        onMouseLeave={() => setPlayOnHover(false)}
      >
        <Carousel
          autoPlay={playOnHover}
          infiniteLoop={true}
          interval={1000}
          showIndicators={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          stopOnHover={false}
        >
          {(playOnHover
            ? thumbnailImages
            : loadRemainingThumbnails[templateId]
            ? thumbnailImages
            : tempThumbnailImages
          ).map((img, index) => (
            <img key={index} src={img} alt={`img${index}`} />
          ))}
        </Carousel>
      </div>
      <span className="templateThumbnail-name">{templateName}</span>
      <ThemeButton
        to={`/template-list/${templateId}`}
        className="templateThumbnail-button"
      >
        Preview this template
      </ThemeButton>
      <div className="horizontal-divider"></div>
    </article>
  );
};

export default TemplateThumbnail;
