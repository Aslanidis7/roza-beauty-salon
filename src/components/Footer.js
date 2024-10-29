import React from 'react';
import FacebookLogo from '../images/Facebooklogo.png';
import InstagramLogo from '../images/Instagramlogo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/rozabeautysalon.gr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookLogo} alt="Facebook Logo" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/roza_beauty_salon_in_athens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram Logo" className="social-icon" />
        </a>
      </div>
      <p>&copy; 2024 Roza Beauty Salon. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
