import React from "react";
import "./Footer.css";
import logoCong from './assets/logo/helasur-sin-fondo.png';
import logoSeco from './assets/logo/helasur-sin-fondo-seco.png';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Empresa */}
        <div className="footer-column">
          <h2>Empresa</h2>
          <div id="logoFooter">
            <img src={logoCong} alt="Logo de la empresa" />
            <img src={logoSeco} alt="Logo de la empresa" />
          </div>
        </div>

        {/* Contacto */}
        <div className="footer-column">
          <h2>Contáctenos</h2>
          <ul className="contact">
            <li>
              <p>
                <strong>Dirección:</strong>
                <br />
                Av. Bernardino Rivadavia 865,
                <br />
                Valentín Alsina, Buenos Aires.
              </p>
            </li>
            <li>
              <p>
                <strong>Teléfono:</strong> (011) 0000-0000
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong>{" "}
                <a className="email" href="mailto:mail@gmail.com">mail@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="footer-column">
          <h2>Ubicación en mapa</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.176295068268!2d-58.40510212350074!3d-34.67818096143572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccc93d7d631ef%3A0x57505c51487d589e!2sAv.%20Pres.%20Bernardino%20Rivadavia%20865%2C%20B1824%20Valent%C3%ADn%20Alsina%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1759268519366!5m2!1ses-419!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="textoLogo azul">HELASUR</span> - Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
