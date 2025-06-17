
import React from "react";
import illustration from "../assets/6226284.png";

export default function WelcomeScreen({ onStartQuote, onSignup }) {
  return (
    <div className="welcome-screen">
      <h1>Let US handle Your car transport!</h1>
      <p>We take care of your vehicle transportation needs with ease and efficiency.</p>
      <button onClick={onStartQuote}>Get a Quote</button>
      <button onClick={onSignup}>Carrier Signup</button>
      <div className="welcome-illustration">
        <img src={illustration} alt="Welcome Illustration" className="illustration" />
      </div>
    </div>
  );
}