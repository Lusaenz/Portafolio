import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../css/ImageWithModal.css";

const ImageWithModal = ({ imageUrl, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt="Proyecto"
        onClick={openModal}
        className="image-projects"
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        sections={React.Children.toArray(modalContent)}
      />
    </div>
  );
};

export default ImageWithModal;
