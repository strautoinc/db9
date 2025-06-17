import React from "react";
import logo from "../assets/D.png";
import { FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <div className="welcome-header">
      <div className="logo-container">
        <img src={logo} alt="DB9 Logistics Logo" className="logo" />
      </div>
      <div className="contact-info">
        <a href="tel:+15613212756" className="contact-link">
          +1(561)321-2756 &nbsp; &nbsp; &nbsp;
          <FaPhone className="contact-icon" />
        </a>
      </div>
    </div>
  );
}