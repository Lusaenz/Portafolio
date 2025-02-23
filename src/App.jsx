import React, { useState } from "react";
import VerticalCarousel from "./components/VerticalCarousel";
import ImageWithModal from "./components/ImageWithModal";
import SocialButtons from "./components/SocialButtons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data/data.json";
import "./index.css";

export function App() {
  const { projects, images } = data;
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <div className="app-container">
        <Header onSectionClick={handleSectionClick} />

        <div
          id="portfolio"
          className={`portfolio-container ${
            activeSection === "portfolio" ? "active-section" : ""
          }`}
        >
          <div className="projects-grid">
            {projects.map((project) => (
              <ImageWithModal
                key={project.id}
                imageUrl={project.imageUrl}
                modalContent={[
                  <div className="modal-section">
                    <h2>{project.modalContent.title}</h2>
                    <p>{project.modalContent.description}</p>
                  </div>,
                  <div className="modal-section">
                    <h3>{project.modalContent.titleDescription}</h3>
                    <p>{project.modalContent.additionalText}</p>
                  </div>,
                  <div className="modal-section">
                    <img
                      src={project.modalContent.additionalImage}
                      alt="Imagen adicional"
                    />
                  </div>,
                ]}
              />
            ))}
          </div>
        </div>

        <div
          id="about"
          className={`center-container ${
            activeSection === "about" ? "active-section" : ""
          }`}
        >
          <div className="name-container">
            <h1 className="profile-name">Luisa Saenz</h1>
            <h2 className="profile-name-red">LuSaenz</h2>
          </div>

          <div className="profile-container">
            <p className="bio">
              ⚡ ¡Hola! Soy LuSaenz o solo Lu.  <br /> 
              Apasionada por el desarrollo de
              videojuegos, me enfoco en crear experiencias interactivas fluidas
              y divertidas. Trabajo con Unity, C# y JavaScript, explorando
              mecánicas, físicas, diseño de niveles y optimización en juegos 2D
              y 3D. Siempre aprendiendo, siempre lista para el próximo desafío.
            </p>
          </div>

          <SocialButtons
            className={`${activeSection === "contact" ? "active-section" : ""}`}
          />
        </div>

        <div
          id="art"
          className={`carousel-container ${
            activeSection === "art" ? "active-section" : ""
          }`}
        >
          <VerticalCarousel images={images} />
        </div>
      </div>
      <Footer />
    </>
  );
}
