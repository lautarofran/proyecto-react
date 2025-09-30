import "./Productos.css";

export default function Productos({ categoria, colorPrincipal }) {
  // Productos por categoría
  const productosCongelados = [
    { id: 1, nombre: "Helado de Vainilla", precio: 250, img: "https://comedera.com/wp-content/uploads/sites/9/2022/05/Helado-de-vainilla-sin-azucar.jpg?w=500&h=500&crop=1" },
    { id: 2, nombre: "Helado de Chocolate", precio: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDMS3KWcYEZYgqEohyP3blGTIzXtHZ5u_VA&s" },
    { id: 3, nombre: "Helado de Frutilla", precio: 280, img: "https://resizer.glanacion.com/resizer/v2/helado-de-frutilla-casero-en-solo-tres-ONCHYWXXHZGSXFIJFOWEKANA5A.jpg?auth=190eaff307e593faa5895f889ddcdafadd2ba773b62131b263736cd6d161783f&width=768&height=510&quality=70&smart=true" },
    { id: 4, nombre: "Helado de Vainilla", precio: 250, img: "https://comedera.com/wp-content/uploads/sites/9/2022/05/Helado-de-vainilla-sin-azucar.jpg?w=500&h=500&crop=1" },
    { id: 5, nombre: "Helado de Chocolate", precio: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDMS3KWcYEZYgqEohyP3blGTIzXtHZ5u_VA&s" },
    { id: 6, nombre: "Helado de Frutilla", precio: 280, img: "https://resizer.glanacion.com/resizer/v2/helado-de-frutilla-casero-en-solo-tres-ONCHYWXXHZGSXFIJFOWEKANA5A.jpg?auth=190eaff307e593faa5895f889ddcdafadd2ba773b62131b263736cd6d161783f&width=768&height=510&quality=70&smart=true" },  
  ];

  const productosSecos = [
    { id: 1, nombre: "Arroz", precio: 120, img: "https://www.gastronomiavasca.net/uploads/image/file/3900/arroz_basmati.jpg" },
    { id: 2, nombre: "Fideos", precio: 100, img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/2/9/a/29a90b49e07efdc003c857d2342f7f5b" },
    { id: 3, nombre: "Harina", precio: 90, img: "https://acdn-us.mitiendanube.com/stores/001/193/620/products/estupenda-harina-000-1kg-pack-x10u-098cb065162033578e17357717477673-1024-1024.jpg" },
    { id: 4, nombre: "Arroz", precio: 120, img: "https://www.gastronomiavasca.net/uploads/image/file/3900/arroz_basmati.jpg" },
    { id: 5, nombre: "Fideos", precio: 100, img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/2/9/a/29a90b49e07efdc003c857d2342f7f5b" },
    { id: 6, nombre: "Harina", precio: 90, img: "https://acdn-us.mitiendanube.com/stores/001/193/620/products/estupenda-harina-000-1kg-pack-x10u-098cb065162033578e17357717477673-1024-1024.jpg" }
  ];

  const listaProductos = categoria === "congelados" ? productosCongelados : productosSecos;

  return (
    <section id="productos" className="productos">
      <h2 style={{ color: colorPrincipal }}>
        {categoria === "congelados" ? "Productos Congelados" : "Productos Secos"}
      </h2>
      <div className="grid-productos">
        {listaProductos.map((producto, index) => (
          <div
            key={producto.id}
            className="card-producto stagger"
            style={{ animationDelay: `${index * 0.1}s`, borderColor: colorPrincipal }}
          >
            <img src={producto.img} alt={producto.nombre} className="imagen-producto" />
            <h3 style={{ color: colorPrincipal }}>{producto.nombre}</h3>
            <p className="precio">Precio: ${producto.precio}</p>
            <button className="btn-agregar" style={{ backgroundColor: colorPrincipal }}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
