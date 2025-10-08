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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
            <div className="header-content">
                <div className="top-bar">
                    <div className="logo" onClick={() => navigate("/congelados")}>
                        <img src={config.logoCong} alt="Logo Congelados" />
                    </div>
                    <div className="logo" onClick={() => navigate("/secos")}>
                        <img src={config.logoSeco} alt="Logo Secos" />
                    </div>
                </div>

                <div className="bot-bar">
                    <BotonesBotHeader colorPrincipal={config.colorPrincipal} />
                </div>
            </div>
        </header>
    );
}
