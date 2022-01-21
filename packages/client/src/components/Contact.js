import React from "react";
import "../styles/contact.css";
import { GoToTop } from ".";
export function Contact() {
  return (
    <div className="contactUs">
      <div className="address">
        <div style={{ fontWeight: "bold" }}>Address</div>
        <div>AMI SANSTHAN 251, Sector-11, Hiran Magri Udaipur- 313001</div>
      </div>
      <div className="contact">
        <div style={{ fontWeight: "bold" }}>Contact</div>+91 94147-37972, +91
        94132-63136
      </div>
      <GoToTop />
    </div>
  );
}
