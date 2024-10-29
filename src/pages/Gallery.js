import React from 'react';
import './Gallery.css'; // Ensure you have the correct CSS file for styling

// Import images
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';

function Gallery() {
  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold text-center">Our Gallery</h2>
      <div className="gallery-grid grid grid-cols-3 gap-4 justify-items-center">
        <img src={img1} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img2} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img3} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img4} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img5} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img6} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img7} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img8} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img9} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img10} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img11} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
        <img src={img12} alt="" className="gallery-image w-48 h-48 rounded-lg transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  );
}

export default Gallery;
