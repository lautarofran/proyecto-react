import { useState, useEffect } from "react";
import "./Productos.css";

export default function Productos({ categoria, colorPrincipal }) {
  const [productos, setProductos] = useState([]);
  const [mostrarCantidad, setMostrarCantidad] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cargandoMas, setCargandoMas] = useState(false); // 👈 nuevo estado

  useEffect(() => {
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

  const verMas = () => {
    // simulamos un pequeño delay (efecto carga)
    setCargandoMas(true);
    setTimeout(() => {
      setMostrarCantidad((prev) => prev + 12);
      setCargandoMas(false);
    }, 700);
  };

  const verMenos = () => {
    setMostrarCantidad(12);
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const productosVisibles = productos.slice(0, mostrarCantidad);

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

      {/* 🔽 Botones Ver más / Ver menos */}
      <div className="contenedor-vermas">
        {mostrarCantidad < productos.length ? (
          <button
            onClick={verMas}
            className="btn-vermas"
            style={{ borderColor: colorPrincipal, color: colorPrincipal }}
            disabled={cargandoMas}
          >
            {cargandoMas ? "Cargando..." : "Ver más"}
          </button>
        ) : (
          <button
            onClick={verMenos}
            className="btn-vermas"
            style={{ borderColor: colorPrincipal, color: colorPrincipal }}
          >
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
}
