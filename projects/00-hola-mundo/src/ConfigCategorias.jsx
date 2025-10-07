// configCategorias.js
import fondoCongelados from './assets/fondos/congelados.jpg';
import fondoSecos from './assets/fondos/secos.jpg';
import logoSeco from './assets/logo/helasur-sin-fondo-seco.png';
import logoCong from './assets/logo/helasur-sin-fondo.png';

export const categorias = {
  congelados: {
    nombre: "DISTRIBUIDORA DE PRODUCTOS CONGELADOS",
    descripcion: "Contamos con amplia variedad de productos, con la mejor relación precio-calidad.",
    background: fondoCongelados,
    backgroundColor: "linear-gradient(to bottom, #e0f7fa, #b2ebf2)",
    colorTexto: "#ffffff",
    logoCong: logoCong,
    logoSeco: logoSeco,
    colorPrincipal: "#4682b4"
  },
  secos: {
    nombre: "DISTRIBUIDORA DE PRODUCTOS SECOS",
    descripcion: "Todo lo que necesitas de almacén, siempre disponible.",
    background: fondoSecos,
    backgroundColor: "linear-gradient(to bottom, #fff3e0, #ffe0b2)",
    colorTexto: "#000000",
    logoSeco: logoSeco,
    logoCong: logoCong,
    colorPrincipal: "#c97711ff"
  }
};
