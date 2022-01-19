import React from "react";
import { NavLink } from "react-router-dom";

import { Slideshow, GalleryPreview } from ".";
import { GoToTop } from ".";

import ngo_logo from "./ngo_logo.jpg";

export function Home() {
  const images = [];
  return (
    <div className="home">
      <div className="about">
        <p className="aboutHeader">AADAWAL - A Literature Festival</p>
        <p>
          <i>
            If you have faith, you always find a way. The lamp can burn bright
            even in gushing wind.
          </i>
          <br /> <br />
          AADAWAL - A Literature Festival, first of its kind is celebrated every
          year in Rajasthan with immense joy, fun & enthusiasm. The lyrics of
          every song, music, dance and poetry had its complete origin from the
          roots of Rajasthani culture.
          <br />
          <br />
          The core value of "AADAWAL" is to make the youth realize the
          importance of Rajasthani culture and to provide a platform to the
          talented, yet unpopular, traditional artists/ artesian of Rajasthan.
        </p>
        <NavLink className="readMore" to="/about">
          Read More
        </NavLink>
      </div>

      <GalleryPreview />
      <div className="ngoDiv">
        <div className=" ngoDescriptionBox">
          <div className="ngoHeading">Our Mother NGO</div>

          <div className="ngoDescription">
            Building self-confidence among women, Illiterate, socially deprived,
            child labor, orphan, physically challenged children and other weaker
            sections of society.
          </div>

          <NavLink
            className="readMore"
            style={{ alignSelf: "center" }}
            to="/ngo"
          >
            Read More
          </NavLink>
        </div>
        <img className="ngoLogo" src={ngo_logo} alt="ngo_logo" />
      </div>
      <div className="quotesPreview">
        <Slideshow
          images={images}
          properties={{ indicators: true, duration: 2000 }}
        />
      </div>
      <GoToTop />
    </div>
  );
}
