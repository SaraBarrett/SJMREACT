import TabButton from "./TabButton";

function Events() {
  function printMateria(subject) {
    alert("matéria " + subject);
  }

  return (
    <div>
      <h3>Eventos Dinâmicos</h3>
      <menu>
        <TabButton clickFunction={() => printMateria("JS")}>
          Matéria JS
        </TabButton>
        <TabButton clickFunction={() => printMateria("React")}>
          Matéria React
        </TabButton>
        <TabButton clickFunction={() => printMateria("Sql")}>
          Matéria SQL
        </TabButton>
      </menu>
      <div>Conteúdo Dinâmico</div>
    </div>
  );
}

export default Events;
