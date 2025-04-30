import React from "react";
import ImageWithModal from "./ImageWithModal";
import "../css/Modal.css";

const ProjectThree = ({ imageUrl }) => {
  const modalContent = [
    <div className="modal-section">
      <h2>Rotten Garden</h2>
      <p>
        Eres un jardinero atrapado en un invernadero donde un parásito está
        infectando todas las plantas. Tu objetivo es descubrir y propagar las
        plantas sanas antes de que el parásito lo haga primero. Si te equivocas,
        la infección se expandirá rápidamente y podrías quedarte sin opciones
        para sobrevivir y escapar.
      </p>
      <div className="modal-img-section">
        <img src="/Rotten2.png" alt="imagen" className="modal-image-prThr" />
        <img src="/Rotten3.png" alt="imagen" className="modal-image-prThr" />
      </div>
    </div>,
    <div className="modal-section">
      <h3>Diseño, Desarrollo y funcionalidad</h3>
      <p>
        El jugador debe hacer clic en una casilla para revelar si la planta es
        sana o está infectada. <br />
        <b>Propagación de Plantas Sanas:</b> Si la primera casilla que revelas
        es una planta sana, esta se multiplicará y cubrirá más terreno,
        ayudándote a controlar la infección. <br />
        <b>Expansión de la Infección:</b> Si la primera casilla que revelas está
        infectada, el parásito se esparcirá a casillas cercanas, complicando la
        partida. <br />
        <b>Plantas Especiales:</b> Algunas plantas tienen habilidades únicas que
        pueden ayudarte en tu objetivo de escapar como la planta purificadora -
        Vitalis: Su esencia purificadora puede eliminar el parásito de una
        casilla infectada cercana, pero solo si aparece después de descubrir una
        casilla infectada. <br />
        <b>El Parásito Necroflora:</b> Un organismo que ha infestado el
        invernadero, mutando las plantas y consumiendo todo a su paso.
        <br />
        Para más detalles sobre el diseño del juego, puedes consultar el{" "}
        <a
          href="https://www.canva.com/design/DAGgsbqd62A/q9tnVVySJd5SlScWp-rsTA/view?utm_content=DAGgsbqd62A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcb64dff4ca#1"
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
          href="https://johan-martinez-r.itch.io/rotten-garden"
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
        <img src="/Rotten4.png" alt="imagen" className="modal-image-prThr" />
        <img src="/Rotten5.png" alt="imagen" className="modal-image-prThr" />
        <img src="/Rotten7.png" alt="imagen" className="modal-image-prThr" />
        <img src="/Rotten12.png" alt="imagen" className="modal-image-prThr" />
      </div>
    </div>,
    <div>
      <h3>Roles y contribuciones</h3>
      <p>
        Rotten Garden, juego en 3D en unity de estrategia y riesgo ambientado en
        un invernadero infestado, donde cada decisión puede salvar tus
        plantas... o condenarlas. Mi rol fue:
        <br />
        <b>Gameplay developer:</b> Desarrollé sistemas clave en Unity que dieron
        vida a la tensión y la estrategia del juego. <br />
        Mecánica de Plantas Aleatorias: Programé en C# la generación procedural
        de plantas (sanas, infectadas y especiales) con porcentajes
        controlables, asegurando que cada partida fuera única. <br />
        Lógica de Victoria/Derrota: Implementé sistemas que evalúan el estado
        del invernadero en tiempo real Derrota: Si el parásito cubría +70% del
        tablero. Victoria: Al purificar el 80% de las plantas. <br />
        Purificación de Plantas:
        Creé la lógica para que la Vitalis (planta purificadora) eliminara
        infecciones cercanas, usando Physics.OverlapCircle para detectar vecinos
        infectados.
        <br />
        <b>VFX y Animaciones:</b> Diseñé partículas infectadas (motas moradas que
        se expanden) y purificadas (destellos Amarillos curativos) con el Particle
        System de Unity. Animé las plantas en 3D para que reaccionaran al estado
        del juego.
      </p>
      <div className="modal-img-section">
        <img src="/Rotten14.png" alt="imagen" className="modal-image-prThr" />
        <img src="/Rotten11.png" alt="imagen" className="modal-image-prThr" />
      </div>
    </div>,
  ];

  return <ImageWithModal imageUrl="/Rotten1.png" modalContent={modalContent} />;
};

export default ProjectThree;
