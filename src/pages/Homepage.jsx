import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h6>As minhas Funcionalidades</h6>
      <Link to="/events">Events</Link>
      <br />
      <Link to="/shopping">Compras</Link>
      <br />
      <Link to="/exs">Exercícios</Link>
    </div>
  );
}
