import React from "react";
import fmcsa from "../assets/fm.png";
import picture from "../assets/enclosed_car_shipping.webp";


export default function About() {
  return (
    <>
    <div className="about-header">
      <img src={picture} alt="About Us" className="about-image" />
    </div>
      <div className="about-container">
        <h2>About Us</h2>
        <p>We are a logistics company dedicated to providing top-notch services.</p>

        <p>Our mission is to streamline supply chain operations and enhance efficiency for our clients.
        </p>
        <p>
          We specialize in various logistics solutions, including transportation,
          warehousing, and distribution.
        </p>
          <p>
              Our team is committed to delivering exceptional service and building
              long-term partnerships with our clients.
          </p>
          <p>For more information, please contact us at{" "}<a href="mailto:info@db9logistics.com">info@db9logistics.com</a>.</p>
          </div>
    <div className="about-container">
      <h2>Our Values</h2>
      <ul>
        <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our dealings.</li>
        <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do.</li>
        <li><strong>Innovation:</strong> We embrace new technologies and ideas to improve our services.</li>
        <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices.</li>
      </ul>
    </div>
   <div className="about-container">
      <h2>Our Team</h2>
      <p>We have a diverse team of professionals with expertise in logistics and supply chain management.</p>
      <p>Our team members are dedicated to providing the best solutions for our clients.</p>
      <p>We believe in continuous learning and development to stay ahead in the industry.</p>
      <p>Meet our team and learn more about their backgrounds and expertise.</p>
      <p>For inquiries, please contact us at <a href="mailto:info@db9logistics.com">info@db9logistics.com</a>.</p>
    </div><div className="about-container">
      <h2>Our History</h2>
      <p>Founded in [Year], we have grown from a small startup to a leading logistics provider.</p>
      <p>Over the years, we have expanded our services and reach to better serve our clients.</p>
      <p>We take pride in our achievements and the trust our clients place in us.</p>
      <p>Learn more about our journey and milestones on our website.</p>
      <p>For more information, please contact us at <a href="mailto:info@db9logistics.com">info@db9logistics.com</a>.</p>
    </div>
    <div className="about-container">
      <h2>Certifications</h2>
      <p>We are certified by the Federal Motor Carrier Safety Administration (FMCSA).</p>
      <p>Our FMCSA certification ensures compliance with industry standards and regulations.</p>
      <img src={fmcsa} alt="FMCSA Certification" className="fmcsa-logo" />
      <p>For more information about our certifications, please visit the FMCSA website.</p>
      <p>For inquiries, please contact us at <a href="mailto:info@db9logistics.com">info@db9logistics.com</a>.</p><br></br><br></br>
    </div>
    </>
  );
}
