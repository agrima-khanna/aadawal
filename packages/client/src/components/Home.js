import React from "react";
import { NavLink } from "react-router-dom";

import { Slideshow, GalleryPreview } from ".";
import { GoToTop } from ".";

import ngo_logo from "./ngo_logo.jpg";
import q1 from "./quotes/q1.png";
import q2 from "./quotes/q2.png";
import q3 from "./quotes/q3.png";
import q4 from "./quotes/q4.png";
import q5 from "./quotes/q5.png";
import q6 from "./quotes/q6.png";
import q7 from "./quotes/q7.png";
import q8 from "./quotes/q8.png";
import q9 from "./quotes/q9.png";
import q10 from "./quotes/q10.png";
import q11 from "./quotes/q11.png";

export function Home() {
  const images = [];
  const quotes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
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
          images={quotes}
          properties={{ indicators: true, duration: 2000 }}
          category={"quotes"}
        />
      </div>
      <GoToTop />
    </div>
  );
}
