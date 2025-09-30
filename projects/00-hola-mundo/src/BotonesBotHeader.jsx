import './BotonesBotHeader.css';

const botones = [
  { texto: "Inicio", target: "header" },
  { texto: "Productos", target: "productos" },
  { texto: "Contacto", target: "footer" }
];

export default function BotonesBotHeader({ colorPrincipal }) {
  const handleClick = (targetId) => {
    const elemento = document.getElementById(targetId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      {botones.map((boton) => (
        <button
          key={boton.texto}
          style={{
            background: colorPrincipal,
            borderRadius: '8px',
            color: '#fff',
            margin: '0 0.5rem',
            padding: '0.6rem 1rem'
          }}
          onClick={() => handleClick(boton.target)}
        >
          {boton.texto}
        </button>
      ))}
    </nav>
  );
}
