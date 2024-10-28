import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="fade-in">
      <h2>Contact Us</h2>
      <p>
        <span className="location-icon">📍</span> 
        Address: 
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Ioánnou+Drosopoúlou+205,+Athina+112+55" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#d94d79', textDecoration: 'none' }}
        >
          Ioánnou Drosopoúlou 205, Athina 112 55
        </a>
      </p>
      <p>
        Phone: 
        <a 
          href="tel:+306945539054" 
          style={{ color: '#d94d79', textDecoration: 'none' }}
        >
          +30 694 553 9054
        </a>
      </p>
      <p>
        <strong>Hours:</strong>
        <br />
        Monday: 11:30 AM – 8:00 PM
        <br />
        Tuesday: 11:30 AM – 8:00 PM
        <br />
        Wednesday: 11:30 AM – 8:00 PM
        <br />
        Thursday: 11:30 AM – 8:00 PM
        <br />
        Friday: 11:30 AM – 8:00 PM
        <br />
        Saturday: 11:30 AM – 8:00 PM
        <br />
        Sunday: Closed
      </p>
    </div>
  );
}

export default ContactUs;
