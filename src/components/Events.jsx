import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data/content";

function Events() {
  const [subjectIn, setSubjectIn] = useState("components");
  function printMateria(subject) {
    setSubjectIn(subject);
  }

  return (
    <div>
      <h3>Eventos Dinâmicos</h3>
      <menu>
        <TabButton clickFunction={() => printMateria("jsx")}>JSX</TabButton>
        <TabButton clickFunction={() => printMateria("props")}>Props</TabButton>
        <TabButton clickFunction={() => printMateria("state")}>
          States
        </TabButton>
      </menu>

      {subjectIn ? (
        <div>
          <div>{EXAMPLES[subjectIn].description}</div>
          <code>{EXAMPLES[subjectIn].code}</code>
        </div>
      ) : (
        <p>Houve um erro a processar a informação</p>
      )}
    
    </div>
  );
}

export default Events;
