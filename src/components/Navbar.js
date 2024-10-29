import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled shrink' : ''} flex flex-col items-center p-4 bg-white bg-opacity-50 backdrop-blur-md`}>
      <h1 className="navbar-title text-2xl font-bold">Roza Beauty Salon</h1>
      <ul className="navbar-links flex gap-4">
        <li><Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link></li>
        <li><Link to="/services" className="text-gray-700 hover:text-pink-600">Services</Link></li>
        <li><Link to="/gallery" className="text-gray-700 hover:text-pink-600">Gallery</Link></li>
        <li><Link to="/booking" className="text-gray-700 hover:text-pink-600">Booking</Link></li>
        <li><Link to="/testimonials" className="text-gray-700 hover:text-pink-600">Testimonials</Link></li>
        <li><Link to="/contact" className="text-gray-700 hover:text-pink-600">Contact Us</Link></li>
        <li><Link to="/social-media" className="text-gray-700 hover:text-pink-600">Social Media</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
