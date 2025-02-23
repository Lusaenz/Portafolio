import React, { useState, useEffect, useRef } from "react";
import "../css/VerticalCarousel.css";

const VerticalCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const carouselItemRef = useRef(null);

  const calculateItemHeight = () => {
    if (carouselItemRef.current) {
      setItemHeight(carouselItemRef.current.clientHeight);
    }
  };

  useEffect(() => {
    calculateItemHeight();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      calculateItemHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="vertical-carousel">
      <button onClick={prevImage} className="carousel-button prev">
        &#9650;
      </button>
      <div className="carousel-container">
        <div
          className="carousel-slider"
          style={{ transform: `translateY(-${currentIndex * itemHeight}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
              ref={index === 0 ? carouselItemRef : null}
            >
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextImage} className="carousel-button next">
        &#9660;
      </button>
    </div>
  );
};

export default VerticalCarousel;
