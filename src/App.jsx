import React, { useState } from "react";
import VerticalCarousel from "./components/VerticalCarousel";
import SocialButtons from "./components/SocialButtons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
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
            <ProjectOne imageUrl={projects[0].imageUrl} />
            <ProjectTwo imageUrl={projects[1].imageUrl} />
            <ProjectThree imageUrl={projects[2].imageUrl} />
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
              ⚡ ¡Hola! Soy Luisa Sáenz, "solo Lu".<br /> 
              Apasionada desarrolladora de
              videojuegos con foco en crear experiencias interactivas fluidas y
              memorables. Especializada en Unity y C#, he trabajado con:
              Mecánicas innovadoras y sistemas de física. Diseño de niveles
              narrativos (2D y 3D). Optimización sin
              sacrificar la diversión. Adicta a los desafíos técnicos y a
              aprender algo nuevo en cada proyecto. ¿Siguiente reto? ¡Estoy
              lista!
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
