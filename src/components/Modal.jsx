import React, { useState } from "react";
import "../css/Modal.css";

const Modal = ({ isOpen, onClose, sections = [] }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = sections.length;

  if (!isOpen || totalSections === 0) return null;

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <div className="modal-carousel">
          {currentSection > 0 && (
            <button
              className="modal-carousel-button prev"
              onClick={prevSection}
            >
              &#10094;
            </button>
          )}
          <div
            className="modal-carousel-content"
            style={{ transform: `translateX(-${currentSection * 100}%)` }}
          >
            {sections.map((section, index) => (
              <div key={index} className="modal-section">
                {section}
              </div>
            ))}
          </div>
          {currentSection < totalSections - 1 && (
            <button
              className="modal-carousel-button next"
              onClick={nextSection}
            >
              &#10095;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
