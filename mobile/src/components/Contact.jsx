import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function Contact() {
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15613212756';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@db9logistics.com';
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps?q=123+Logistics+Lane,+Suite+100,+Cityville,+ST+12345', '_blank');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item" onClick={handlePhoneClick}>
          <FaPhone className="contact-icon" />
          <span>+1 (561) 321-2756</span>
        </div>
        <div className="contact-item" onClick={handleEmailClick}>
          <FaEnvelope className="contact-icon" />
          <span>info@db9logistics.com</span>
        </div>
        <div className="contact-item" onClick={handleAddressClick}>
          <FaMapMarkerAlt className="contact-icon" />
          <span>123 Logistics Lane, Suite 100, Cityville, ST 12345</span>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}