import React, { useState, useEffect } from "react";
import "./SlideCarousel.css";

// Definimos las imágenes dentro del mismo archivo
const imagenesPorCategoria = {
  congelados: [
    "https://www.moebiusmarketing.com/wp-content/uploads/2021/10/aloha-01.jpg",
    "https://www.seitu.com/wp-content/uploads/logo-sei-tu.png"
  ],
  secos: [
    "/src/assets/marcas/prueba_marcas.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/McCain-Logo.svg/1200px-McCain-Logo.svg.png"
  ]
};

export default function SlideCarousel({ categoria = "congelados", interval = 3000 }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imagenesPorCategoria[categoria] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  let colorPrincipal = "#4682b4"; 

  if (categoria === "secos") {
    colorPrincipal = "#c97711ff";
  }

  return (
    <div className="carousel-container">
      <h1 id="inicio" className="carousel-title" style={{ color: colorPrincipal, textAlign: "center" }}>
        {categoria === "congelados" ? "Marcas de Congelados" : "Marcas de Productos Secos"}
      </h1>
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}
