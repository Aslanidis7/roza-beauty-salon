import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  return (
    <div className="fade-in">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Gallery" onClick={() => openLightbox(image)} />
        ))}
      </div>
      {selectedImage && <Lightbox image={selectedImage} onClose={closeLightbox} />}
    </div>
  );
}

export default Gallery;
