import React, { useEffect } from "react";
import { GoToTop, Slideshow } from ".";
import "../styles/about.css";
import img2 from "./about/img2.jpg";
import img3 from "./about/img3.jpg";
import img4 from "./about/img4.jpg";
import img5 from "./about/img5.jpg";
import img6 from "./about/img6.jpg";
import img7 from "./about/img7.jpg";

import img9 from "./about/img9.jpg";

import img13 from "./about/img13.jpg";
export function About({ changeState }) {
  const images = [img2, img3, img4, img5, img6, img7, img9, img13];

  useEffect(() => {
    changeState("About Us");
  });
  return (
    <div className="aboutUs">
      <div className="about">
        International festival Rajasthan Sahitya Mahotsav "AADAWAL” is a
        platform for artists and artisans of Rajasthan in order to promote the
        art, culture, literature, language and tradition of the state. Every
        year the festival is great zeal and enthusiasm. The festival witnessed
        about 15 lakh views and about 12,000 footfalls in year 2019. In year
        2020, the festival reached approx. 35 lakh people through print,
        electronic and social media with an international outreach.
        <br /> <br />
        “AADAWAL”-2021 festival was organized with a greater enthusiasm. The
        need to promote our art and culture and provide a platform to support
        artists who are adversely affected by the present COVID pandemic is
        required more than ever. It is a great platform promoting our tribal
        culture, helping it reach people across the globe and enhancing tourism
        in present scenario.
      </div>
      <div className="aboutImgPreview">
        <Slideshow
          images={images}
          properties={{ indicators: true, duration: 2000, arrows: false }}
          category={"about"}
        />
      </div>
      <div className="about">
        In the festival sessions are organized on Rajasthan’s art, culture,
        literature, cinema, tribal tradition, wooden toys, heritage, play,
        visual art, book launching, guest lectures, etc. A showcase of “PERAVO”
        Tradition to Trend and visual art performance “Aazadi Ka Amrit Mahotsav”
        were some of the highlights of the festival this year.
        <br /> <br /> Various dignitaries from Rajasthani theater, art,
        literature and cinema become a part of the programme every year. In the
        year 2021, the program reached 10 lakh people through social media, 8
        lakh people through electronic media, 6 lakh people through print media
        with an international outreach providing a bigger canvas for artists and
        artisans to come together for a noble cause and commitment to the
        motherland.
      </div>
      <GoToTop />
    </div>
  );
}
