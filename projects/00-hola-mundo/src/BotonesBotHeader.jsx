import './BotonesBotHeader.css';

const botones = [
  { texto: "Inicio", target: "inicio" },
  { texto: "Productos", target: "productos" },
  { texto: "Contacto", target: "footer" }
];

export default function BotonesBotHeader({ colorPrincipal }) {
  const handleClick = (targetId) => {
    if (targetId === "inicio") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
            background: `${colorPrincipal}`,
            borderRadius: '8px',
            color: '#fff',
            margin: '0 0.5rem',
            padding: '0.6rem 1rem',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          onClick={() => handleClick(boton.target)}
        >
          {boton.texto}
        </button>
      ))}
    </nav>
  );
}
