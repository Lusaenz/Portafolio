import React from "react";
import ImageWithModal from "./ImageWithModal";
import "../css/Modal.css";

const ProjectOne = ({ imageUrl }) => {
  const modalContent = [
    <div className="modal-section">
      <h2>Daydream</h2>
      <p>
        JetLee, un niño introvertido, usa su imaginación para convertir sus
        miedos en escenarios de combate surrealistas. Cada nivel del juego
        representa una lucha interna, donde enemigos y obstáculos simbolizan sus
        inseguridades.
        <br /> En este primer universo, el jugador se enfrenta a Cam/Cyberbully,
        una manifestación grotesca de su compañero de colegio que lo acosa
        (bully). A través de mecánicas de shooter 3D y un estilo visual
        inspirado en cómics retro, JetLee aprenderá a confrontar sus temores,
        usando armas creativas.
      </p>
      <div className="modal-img-section">
        <img src="/pr10.png" alt="imagen" className="modal-image" />
        <img src="/pr4.png" alt="imagen" className="modal-image" />
        <img src="/pr5.png" alt="imagen" className="modal-image" />
      </div>
    </div>,
    <div className="modal-section">
      <h3>Diseño, Desarrollo y funcionalidad</h3>
      <p>
        Daydream es un videojuego de acción-aventura con elementos surrealistas,
        desarrollado en Unity. Combina una estética 2D cinemática con mecánicas
        de shooter en 3D, creando un universo donde la imaginación es tu arma
        más poderosa. Con un estilo retro y emocional, inspirado en el cómic, el
        juego busca sumergir al jugador en una experiencia única, desafiante y
        narrativa.
        <br /> <b>Género:</b> Shooter 3D / Aventura surrealista <br />
        <b>Estilo:</b> Retro – Cómic – Onírico <br />
        <b>Público objetivo:</b> Jugadores de 13+ años que disfrutan de
        historias profundas mezcladas con acción intensa.
        <br />
        Para más detalles sobre el diseño del juego, puedes consultar el{" "}
        <a
          href="https://www.canva.com/design/DAGjTU5VI_c/yctojVXdUN5Y-o01rJDMHw/view?utm_content=DAGjTU5VI_c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h16fd3d0580"
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
        y puedes Jugar Daydream {" "}
        <a
          href="https://josedavdmast3r.itch.io/daydream"
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
        <img src="/pr1.png" alt="imagen" className="modal-image" />
        <img src="/pr3.png" alt="imagen" className="modal-image" />
        <img src="/pr9.png" alt="imagen" className="modal-image" />
      </div>
    </div>,
    <div>
      <h3>Roles y contribuciones</h3>
      <p>
        En Daydream tuve la suerte de trabajar con un equipo muy colaborativo,
        donde asumí roles clave como:<br />
        <b>Project Manager:</b> Coordinando sprints y equilibrando visión
        creativa con plazos, además de desarrollar el Game Design Document (GDD)
        que guió todo el proyecto.<br />
        <b>Enemy Behavior Programmer:</b> Diseñando IA que convirtiera a los
        enemigos en extensiones de los miedos de JetLee.<br />
        <b>Level Designer:</b> Donde creé el primer escenario que mezclan lo
        surreal con lo emocional - desde el diseño inicial en el GDD hasta la
        implementación del bully transformado en jefe épico. <br />
        Fue un desafío frenético pero gratificante. No solo aprendí que hasta los bugs tienen
        su lado divertido cuando se trabaja con gente apasionada, sino también
        la importancia de documentar cada decisión creativa y técnica en el GDD
        para mantener la visión coherente.
      </p>
      <div className="modal-img-section">
        <img src="/pr2.png" alt="imagen" className="modal-image-exc" />
      </div>
    </div>,
  ];

  return <ImageWithModal imageUrl="/pr7.png" modalContent={modalContent} />;
};

export default ProjectOne;
