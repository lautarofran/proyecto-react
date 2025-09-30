import React from "react";
import SlideCarousel from "./SlideCarousel";
import TarjetasInfo from "./TarjetasInfo";
import Informacion from "./Informacion";
import Productos from "./Productos";
import { categorias } from "./ConfigCategorias";

export default function PaginaCategoria({ categoria }) {
    const config = categorias[categoria] || categorias["congelados"];

    return (
        <div className="pagina-categoria" style={{ background: config.backgroundColor, minHeight: "100vh" }}>
            <SlideCarousel categoria={categoria} />
            <TarjetasInfo colorPrincipal={config.colorPrincipal} categoria={categoria} />
            <Informacion />
            <main style={{ padding: "2rem", textAlign: "center" }}>
                <Productos categoria={categoria} colorPrincipal={config.colorPrincipal} />
            </main>
        </div>
    );
}
