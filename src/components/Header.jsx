// src/components/Header.jsx
import React from "react";
import "../css/Header.css";

const Header = ({ onSectionClick }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-list">
          <li>
            <button onClick={() => onSectionClick("portfolio")}>
              Proyectos
            </button>
          </li>
          <li>
            <button onClick={() => onSectionClick("about")}>Quién soy</button>
          </li>
          <li>
            <button onClick={() => onSectionClick("art")}>VFX</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
