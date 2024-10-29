import React, { useState } from 'react';
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
import img9 from '../images/9.png'; // New image
import img10 from '../images/10.png'; // New image
import img11 from '../images/11.png'; // New image
import img12 from '../images/12.png'; // New image

function Gallery() {
  const [loadedImages, setLoadedImages] = useState(Array(12).fill(false)); // Track loaded images

  const handleImageLoad = (index) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true; // Mark the image as loaded
    setLoadedImages(newLoadedImages);
  };

  return (
    <div className="fade-in">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`gallery-image ${loadedImages[index] ? 'fade-in' : 'hidden'}`} // Apply fade-in class if loaded
            onLoad={() => handleImageLoad(index)} // Handle image load
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
