import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled shrink' : ''}`}>
      <h1 className="navbar-title">Roza Beauty Salon</h1>
      <div className="lg:hidden">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/social-media">Social Media</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
