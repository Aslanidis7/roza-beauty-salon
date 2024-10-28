import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { checkBrowserSupport } from './utils/browserSupport';

// Import each page component
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import SocialMedia from './pages/SocialMedia';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Only animate once on scroll
      easing: 'ease-out',
    });
    
    // Check browser support
    checkBrowserSupport();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <TransitionGroup>
          <Routes>
            <Route path="/" element={
              <CSSTransition timeout={500} classNames="fade">
                <Home />
              </CSSTransition>
            } />
            <Route path="/services" element={
              <CSSTransition timeout={500} classNames="fade">
                <Services />
              </CSSTransition>
            } />
            <Route path="/gallery" element={
              <CSSTransition timeout={500} classNames="fade">
                <Gallery />
              </CSSTransition>
            } />
            <Route path="/booking" element={
              <CSSTransition timeout={500} classNames="fade">
                <Booking />
              </CSSTransition>
            } />
            <Route path="/testimonials" element={
              <CSSTransition timeout={500} classNames="fade">
                <Testimonials />
              </CSSTransition>
            } />
            <Route path="/contact" element={
              <CSSTransition timeout={500} classNames="fade">
                <ContactUs />
              </CSSTransition>
            } />
            <Route path="/social-media" element={
              <CSSTransition timeout={500} classNames="fade">
                <SocialMedia />
              </CSSTransition>
            } />
          </Routes>
        </TransitionGroup>
      </div>
    </Router>
  );
}

export default App;
