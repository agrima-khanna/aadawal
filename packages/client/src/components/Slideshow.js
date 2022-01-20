import React from "react";
import { Slide } from "react-slideshow-image";

// const slideImages = ["image1.jpg", "image2.jpg", "image3.jpeg"];

export function Slideshow(props) {
  //   console.log(props.images);
  return (
    <Slide easing="ease" {...props.properties}>
      {props.images.map((image, i) => {
        return (
          <div key={i} className="each-slide">
            <img src={image} alt="slideImg" />
          </div>
        );
      })}
    </Slide>
  );
}
