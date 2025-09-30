import './Header.css';
import { useNavigate, useLocation } from "react-router-dom";
import BotonesBotHeader from './BotonesBotHeader';
import { categorias } from './ConfigCategorias';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // Obtener la categoría según la ruta
    const categoriaKey = location.pathname.replace("/", "") || "congelados";
    const config = categorias[categoriaKey] || categorias["congelados"];

    return (
        <header
            className="header-pagina"
            style={{
                backgroundImage: `url(${config.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: config.colorTexto, // texto del header
                transition: "all 0.5s ease"
            }}
        >
            <div className="top-bar">
                <div className="logo" onClick={() => navigate("/congelados")} style={{ cursor: "pointer" }}>
                    <img src={config.logo} alt="Logo Congelados" />
                </div>

                <div className="texto-header">
                    <h2>{config.nombre}</h2>
                    <p>{config.descripcion}</p>
                    <p>¡Nos adaptamos a tu necesidad!</p>
                </div>

                <div className="logo" onClick={() => navigate("/secos")} style={{ cursor: "pointer" }}>
                    <img src={config.logo} alt="Logo Secos" />
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
