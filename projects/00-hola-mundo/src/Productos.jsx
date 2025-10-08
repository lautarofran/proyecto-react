import { useState, useEffect } from "react";
import "./Productos.css";

export default function Productos({ categoria, colorPrincipal }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // página actual
  const itemsPerPage = 12; // productos por página

  useEffect(() => {
    setCurrentPage(1); // reinicia la página

    const obtenerProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/productos.json");
        if (!response.ok) throw new Error("Error al cargar productos");

        const data = await response.json();
        const lista = categoria === "congelados" ? data.congelados : data.secos;
        setProductos(lista);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoria]);


  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calcular productos visibles
  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = indexStart + itemsPerPage;
  const productosVisibles = productos.slice(indexStart, indexEnd);

  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const irAPagina = (numero) => {
    if (numero < 1 || numero > totalPages) return;
    setCurrentPage(numero);

    // Scroll suave hacia la sección de productos
    const seccionProductos = document.getElementById("productos");
    if (seccionProductos) {
      seccionProductos.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section id="productos" className="productos">
      <h2 style={{ color: colorPrincipal }}>
        {categoria === "congelados"
          ? "Productos Congelados"
          : "Productos Secos"}
      </h2>

      <div className="grid-productos">
        {productosVisibles.map((producto, index) => (
          <div
            key={producto.id}
            className="card-producto stagger"
            style={{
              animationDelay: `${index * 0.1}s`,
              borderColor: colorPrincipal,
            }}
          >
            <img
              src={producto.img}
              alt={producto.nombre}
              className="imagen-producto"
            />
            <h3 style={{ color: colorPrincipal }}>{producto.nombre}</h3>
            <p className="precio">Precio: ${producto.precio}</p>
            <button
              className="btn-agregar"
              style={{ backgroundColor: colorPrincipal }}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="contenedor-paginacion">
        <button
          onClick={() => irAPagina(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ borderColor: colorPrincipal, color: colorPrincipal }}
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => irAPagina(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
            style={{
              borderColor: colorPrincipal,
              color: currentPage === i + 1 ? "#fff" : colorPrincipal,
              backgroundColor: currentPage === i + 1 ? colorPrincipal : "transparent",
            }}
          >
            {i + 1}
          </button>

        ))}

        <button
          onClick={() => irAPagina(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ borderColor: colorPrincipal, color: colorPrincipal }}
        >
          →
        </button>
      </div>
    </section>
  );
}
