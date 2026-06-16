import userData from "../data/userData";

function Card() {

  return (
    <div className="card">
      <p>
        <b>Nome:</b>
        {userData.lastName}
      </p>
      <p>
        <b>Apelido:</b>
        {userData.firstName}
      </p>
      <p>
        <b>Profissão:</b>
        {userData.title}
      </p>
    </div>
  );
}

export default Card;
