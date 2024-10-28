import React from 'react';
import FacebookLogo from '../images/Facebooklogo.png';
import InstagramLogo from '../images/Instagramlogo.png';
import './SocialMedia.css';

function SocialMedia() {
  return (
    <div className="fade-in">
      <h2>Follow Us on Social Media</h2>
      <div className="social-media-links">
        <a 
          href="https://www.facebook.com/rozabeautysalon.gr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <img 
            src={FacebookLogo} 
            alt="Facebook Logo" 
            className="social-icon" 
          />
        </a>
        <a 
          href="https://www.instagram.com/roza_beauty_salon_in_athens" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <img 
            src={InstagramLogo} 
            alt="Instagram Logo" 
            className="social-icon" 
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
