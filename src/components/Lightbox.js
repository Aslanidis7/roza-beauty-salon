import React from 'react';
import './Lightbox.css';

function Lightbox({ image, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={image} alt="Enlarged view" className="lightbox-image" />
    </div>
  );
}

export default Lightbox;
