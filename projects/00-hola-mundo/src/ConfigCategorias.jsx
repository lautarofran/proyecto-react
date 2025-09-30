// configCategorias.js
import fondoCongelados from './assets/fondos/congelados.jpg';
import fondoSecos from './assets/fondos/secos.jpg';
import logo from './assets/logo/helasur.jpg';

export const categorias = {
  congelados: {
    nombre: "DISTRIBUIDORA DE CONGELADOS",
    descripcion: "Contamos con amplia variedad de productos, con la mejor relación precio-calidad.",
    background: fondoCongelados,
    backgroundColor: "linear-gradient(to bottom, #e0f7fa, #b2ebf2)",
    colorTexto: "#ffffff",
    logo: logo,
    colorPrincipal: "#4682b4"
  },
  secos: {
    nombre: "DISTRIBUIDORA DE PRODUCTOS SECOS",
    descripcion: "Todo lo que necesitas de almacén, siempre disponible.",
    background: fondoSecos,
    backgroundColor: "linear-gradient(to bottom, #fff3e0, #ffe0b2)",
    colorTexto: "#000000",
    logo: logo,
    colorPrincipal: "#c97711ff"
  }
};
