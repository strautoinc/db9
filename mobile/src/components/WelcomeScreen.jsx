import React from "react";
import logo from "../assets/D.png"; // Adjust the path as necessary
import illustration from "../assets/6226284.png"; // Adjust the path as necessary

export default function WelcomeScreen({ onStartQuote, onSignup }) {
  return (
    <div className="welcome-screen">
        <div className="welcome-header">
                <div className="contact-info">
                    <i className="fas fa-phone"></i>
            <a href="tel:+15613212756" className="contact-link">561-321-2756</a>
            </div>
            <div className="logo-container">
                  <img src={logo} alt="DB9 Logistics Logo" className="logo" />
            </div>
        
        </div>
      <h1> Let US handle Your car transport!</h1>
      <p>We take care of your vehicle transportation needs with ease and efficiency.</p>
      <button onClick={onStartQuote}>Get a Quote</button>
        <button onClick={onSignup}>Carrier Signup</button>
        <div className="welcome-illustration">
            <img src={illustration} alt="Welcome Illustration" className="illustration" />
        </div>
    </div>
  );
}