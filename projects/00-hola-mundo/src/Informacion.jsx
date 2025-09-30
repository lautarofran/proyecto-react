import React from "react";
import "./Informacion.css"; // CSS separado
import fondo from "./assets/general/transporte.jpg"; // reemplazá con tu imagen

export default function Informacion({ texto }) {
  return (
    <section className="informacion" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="texto-central">
        <h1>Envío al día siguiente sin cargo</h1>
      </div>
      <div
        style={{
          backgroundImage: "url('/ruta/fondo.jpg')",
          backgroundSize: "cover",
          padding: "3rem",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold"
        }}
      >
        {texto}
      </div>
    </section>
  );
}
