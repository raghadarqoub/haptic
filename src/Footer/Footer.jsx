import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="/Images/footer.jpeg" alt="Logo" />
      </div>
      <div className="footer-links">
        <div className="footer-title">Learn More</div>
        <a href="/">Home</a>
        <a href="/work">Work</a>
        <a href="/pricing">Pricing</a>
        <a href="/careers">Careers</a>
        <div className="footer-copyright">
          Haptic © 2025
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-title">Follow Us</div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
