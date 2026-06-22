import { useEffect, useState } from "react";

export default function PeoplePage() {
  //definir estado para receber dados
  const [people, setPeople] = useState();

  //consulta à API
  useEffect(() => {
    fetch("https://swapi.info/api/people")
      .then((response) => response.json())
      .then((resData) => setPeople(resData));
  });

  return (
    <div>
      <h4>Personagens</h4>
      {!people ||
        (people.length == 0 && <p> Ups Não temos personagens disponíveis</p>)}
      {people && people.length > 0 && (
        <div>
          {people.map((item, index) => (
            <p key={index}>
              {item.name}, {item.birth_year}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
