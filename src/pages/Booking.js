import React from 'react';
import Button from '../components/Button';

function Booking() {
  return (
    <div className="fade-in">
      <h2>Book an Appointment</h2>
      <p>To schedule an appointment:</p>
      <Button text="Call Now" onClick={() => window.location.href = 'tel:+306945539054'} />
    </div>
  );
}

export default Booking;
