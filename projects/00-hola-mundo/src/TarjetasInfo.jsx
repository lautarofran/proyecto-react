import "./TarjetasInfo.css";
import stock_cong from "./assets/logo/stock_cong.png";
import stock_seco from "./assets/logo/stock_seco.png";

import mensajes_cong from "./assets/logo/mensajes_cong.png";
import mensajes_seco from "./assets/logo/mensajes_seco.png";

import camion_cong from "./assets/logo/camion_cong.png";
import camion_seco from "./assets/logo/camion_seco.png";

import insignia_cong from "./assets/logo/insignia_cong.png";
import insignia_seco from "./assets/logo/insignia_seco.png";

import infraestructura_cong from "./assets/logo/infraestructura_cong.png";
import infraestructura_seco from "./assets/logo/infraestructura_seco.png";

import precio_cong from "./assets/logo/precio_cong.png";
import precio_seco from "./assets/logo/precio_seco.png";


const listaTarjetas = [
    {
        img: {
            congelados: stock_cong,
            secos: stock_seco
        },
        titulo: "Stock de Productos",
        texto: "Más de 1200 productos secos, fríos y congelados en catálogo con stock permanente.",
    },
    {
        img: {
            congelados: mensajes_cong,
            secos: mensajes_seco
        },
        titulo: "Atención al Cliente",
        texto: "Atención personalizada y servicios adaptados a tus necesidades.",
    },
    {
        img: {
            congelados: camion_cong,
            secos: camion_seco
        },
        titulo: "Distribución y Logística",
        texto: "La más amplia cobertura para entregas en CABA y GBA con entrega en 24 hs sin cargo.",
    },
    {
        img: {
            congelados: insignia_cong,
            secos: insignia_seco
        },
        titulo: "Productos de Alta Calidad",
        texto: "Productos exclusivos y las marcas más reconocidas del mercado.",
    },
    {
        img: {
            congelados: infraestructura_cong,
            secos: infraestructura_seco
        },
        titulo: "Óptima Infraestructura",
        texto: "Más de 6000 mts2 para el almacenamiento de productos de almacén, frescos y congelados.",
    },
    {
        img: {
            congelados: precio_cong,
            secos: precio_seco
        },
        titulo: "Precios y servicio",
        texto: "Los mejores precios del mercado.",
    },
];

export default function TarjetasInfo({ colorPrincipal = "#4682b4", categoria = "congelados" }) {
    return (
        <div>
            <h1 className="tarjetaTitulo" style={{ color: colorPrincipal }}>
                Entrega, calidad, cercanía
            </h1>
            <div className="contenedorTarjetas">
                {listaTarjetas.map((tarjeta, index) => (
                    <div
                        className="tarjeta"
                        key={index}
                        style={{
                            borderColor: colorPrincipal,
                            "--colorHover": colorPrincipal,
                        }}
                    >
                        <div className="tarjetaReposo">
                            <img src={tarjeta.img[categoria]} alt={tarjeta.titulo} />
                            <h4 style={{ color: colorPrincipal }}>{tarjeta.titulo}</h4>
                        </div>
                        <div
                            className="tarjetaHover"
                            style={{
                                backgroundColor: colorPrincipal,
                                color: "white",
                            }}
                        >
                            <p>{tarjeta.texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
