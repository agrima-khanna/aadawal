import React from "react";
import { Slide } from "react-slideshow-image";

export function Slideshow(props) {
  return (
    <Slide easing="ease" {...props.properties}>
      {props.images.map((image, i) => {
        return (
          <div key={i} className="each-slide">
            <img
              className={
                props.category === "quotes" ? "quotesImg" : "previewImg"
              }
              src={image}
              alt="slideImg"
            />
          </div>
        );
      })}
    </Slide>
  );
}
