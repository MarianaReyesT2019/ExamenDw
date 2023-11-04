import React, { useState } from 'react';
import './Gallery.css'; // Estilo para tu galería


function Gallery({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleImageZoom = () => {
     
    };
  
    return (
      <div className="gallery-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="image"
          onClick={handleImageZoom}
        />
        <div className="navigation-buttons">
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      </div>
    );
  }
  
  export default Gallery;
  