import React from "react";

export default function Footer () {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}  DB9 Logistics. All rights reserved.</p>
        <a href="https://www.db9logistics.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>  |  <a href="https://www.db9logistics.com/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
    </footer>
  );
}