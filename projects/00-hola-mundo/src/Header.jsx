import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css';
import BotonesBotHeader from './BotonesBotHeader';
import { categorias } from './ConfigCategorias';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    const categoriaKey = location.pathname.replace("/", "") || "congelados";
    const config = categorias[categoriaKey] || categorias["congelados"];

    // Detectar scroll para achicar header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ajustar margin-top del contenido dinámicamente
    useEffect(() => {
        const ajustarMarginRutas = () => {
            const header = document.querySelector(".header-pagina");
            const rutas = document.querySelector(".rutas"); // contenedor de Routes
            if (header && rutas) {
                rutas.style.marginTop = `${header.offsetHeight}px`;
            }
        };

        // Ejecutar al cargar
        ajustarMarginRutas();

        // Ejecutar al redimensionar y al hacer scroll
        window.addEventListener("resize", ajustarMarginRutas);
        window.addEventListener("scroll", ajustarMarginRutas);

        return () => {
            window.removeEventListener("resize", ajustarMarginRutas);
            window.removeEventListener("scroll", ajustarMarginRutas);
        };
    }, []);

    return (
        <header
            className={`header-pagina ${scrolled ? "scrolled" : ""}`}
            style={{
                backgroundImage: `url(${config.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: config.colorTexto,
                transition: "all 0.5s ease"
            }}
        >
            <div className="top-bar">
                <div className="logo" onClick={() => navigate("/congelados")} style={{ cursor: "pointer" }}>
                    <img src={config.logoCong} alt="Logo Congelados" />
                </div>

                <div className="texto-header">
                    <h2>{config.nombre}</h2>
                    <p>{config.descripcion}</p>
                    <p>¡Nos adaptamos a tu necesidad!</p>
                </div>

                <div className="logo" onClick={() => navigate("/secos")} style={{ cursor: "pointer" }}>
                    <img src={config.logoSeco} alt="Logo Secos" />
                </div>
            </div>

            <div className="bot-bar">
                <div className="nav-menu">
                    <BotonesBotHeader colorPrincipal={config.colorPrincipal} />
                </div>
            </div>
        </header>
    );
}
