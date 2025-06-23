import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import picture from '../assets/call.jpg'; 
import fmcsa from '../assets/fm.png'; // Replace with your actual image path

export default function Contact() {
  return (
    <><div className='contact-image'>
      <img src={picture} alt="Contact" />
    </div><div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-text">+1 (123) 456-7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">info@db9logistics.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-text">123 Logistics Lane, City, State, ZIP</span>
          </div>
        </div>
        <p>For inquiries, please fill out our <a href="/contact-form">contact form</a> or reach out via email or phone.</p>
        <p>We look forward to hearing from you!</p>
      </div>
      <div className="contact-authority">
      <div>
        <img src={fmcsa} alt="FMCSA Logo"  className="fmcsa-logo" />
      </div>
      <div className='authority'>
        <ul>
          <li>MC Number: 123456</li>
          <li>USDOT Number: 1234567</li>
          <li>Insured and Bonded</li>
        </ul>
      </div>
      </div>
    </>
  );
  
}

