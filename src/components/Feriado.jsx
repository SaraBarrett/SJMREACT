import './Feriado.css';

function Feriado({ day, type }) {
  return (
    <div class="feriado-box">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
        alt="Celebração de feriado"
      />
      <h2>
        🎉 {day} é {type}!
      </h2>
      <p>Aproveite para descansar e desfrutar do seu dia livre.</p>
    </div>
  );
}

export default Feriado;