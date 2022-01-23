import React from "react";
import "../styles/contact.css";
import { GoToTop } from ".";
export function Contact() {
  return (
    <div className="contactUs">
      <div className="address">
        <div style={{ fontWeight: "bold" }}>Address</div>
        <div> Udaipur, Rajasthan</div>
      </div>
      <div className="contact">
        <div style={{ fontWeight: "bold" }}>Contact</div>+91 9783730979, +91
        9414737972
      </div>
      <div className="email">
        <div style={{ fontWeight: "bold" }}>Email</div>
        rsmaadawal@gmail.com
      </div>
      <GoToTop />
    </div>
  );
}
