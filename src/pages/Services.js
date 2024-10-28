import React, { useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

function Services() {
  const ref = useRef(null);
  useScrollReveal(ref);

  const services = [
    "Haircuts and Styling",
    "Manicures and Pedicures",
    "Facial Treatments",
    "Massages"
  ];

  return (
    <div ref={ref} className="fade-in">
      <h2>Our Services</h2>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className={`service-item delay-${index + 1}`}>{service}</li>
        ))}
      </ul>
      <p>Discover a wide range of services designed to enhance your beauty and relax your mind.</p>
    </div>
  );
}

export default Services;
