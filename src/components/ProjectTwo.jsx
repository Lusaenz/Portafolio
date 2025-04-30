import React from "react";
import ImageWithModal from "./ImageWithModal";
import "../css/Modal.css";

const ProjectOne = ({ imageUrl }) => {
  const modalContent = [
    <div className="modal-section">
      <h2>Beyond The Bridge</h2>
      <p>
        Estás perdido en el corazón de una jungla volcánica, pero no estás solo:
        tu fiel zorro, Mango, siempre está a tu lado. Juntos, deberán recorrer
        el peligroso paisaje, superando trampas y peligros mientras buscan la
        manera de escapar.
      </p>
      <div className="modal-img-section">
        <img src="/Beyond9.png" alt="imagen" className="modal-image-prTwo" />
        <img src="/Beyond4.png" alt="imagen" className="modal-image-prTwo" />
      </div>
    </div>,
    <div className="modal-section">
      <h3>Diseño, Desarrollo y funcionalidad</h3>
      <p>
        El jugador debe colaborar con Mango para superar los obstáculos del
        paisaje, evitando peligros como trampas y lava. Solo mediante la
        cooperación podrán llegar sanos y salvos al final y escapar de la
        jungla. <br />
        El jugador comienza en un punto predeterminado del mapa, desde donde
        puede observar su entorno. Dondequiera que vaya, Mango lo seguirá. A
        medida que avanza, la cámara lo sigue, asegurándose de que esté
        plenamente consciente de los diversos obstáculos. Al llegar a un
        acantilado, ambos deben presionar un botón para activar un puente que
        les permita cruzar al otro lado. Sin embargo, al presionar el botón, el
        volcán se agita, lo que obliga al jugador a proceder con precaución si
        espera cruzar sano y salvo.
        <br />
        Para más detalles sobre el diseño del juego, puedes consultar el{" "}
        <a
          href="https://drive.google.com/file/d/1-RN5dRbuLmKl3bsNFFZrj_hvVRmKQPo0/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: "bold",
            color: "#c90f0f",
            textDecoration: "none",
          }}
        >
          Game Design Document (GDD)
        </a>
        y puedes Jugar Beyond The Bridge{" "}
        <a
          href="https://dospinac.itch.io/beyond-the-bridge"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: "bold",
            color: "#c90f0f",
            textDecoration: "none",
          }}
        >
          aqui.
        </a>
      </p>
      <div className="modal-img-section">
        <img src="/Beyond7.png" alt="imagen" className="modal-image-prTwo" />
        <img src="/Beyond10.png" alt="imagen" className="modal-image-prTwo" />
      </div>
    </div>,
    <div>
      <h3>Roles y contribuciones</h3>
      <p>
        Beyond The Bridge, juego en 2D en unity. Trabajar con este equipo fue
        una experiencia inolvidable. En solo un día y medio, logramos
        sincronizar programación, arte y diseño para alcanzar nuestra meta.
        Aprendí que un gran equipo transforma el estrés en energía creativa. Mi
        rol fue:
        <br />
        <b>Gameplay Programmer (Player Controller):</b> Desarrollé el sistema de
        movimiento y habilidades del personaje en C#, desde el salto ajustado
        hasta la interacción con eventos del entorno.
        <br />
        <b>Sistemas de Vida:</b>Programé las barras de salud con feedback
        visual.
        <br />
        <b>VFX Artista</b> Creé efectos para volcanes usando el Particle System
        de Unity desde lava burbujeante hasta cenizas que afectan la
        jugabilidad.
      </p>
      <div className="modal-img-section">
      <img src="/Beyon5.png" alt="imagen" className="modal-image-prTwo-exc" />
      </div>
    </div>,
  ];

  return <ImageWithModal imageUrl="/Beyond8.png" modalContent={modalContent} />;
};

export default ProjectOne;
