function FirstComponent() {
  let course = {
    name: "Tecnico de Programação",
    hours: 1500,
  };

  return (
    <div>
      <h5>Aprendendo React!</h5>
      <p>Para melhorar as minhas competências de Programação Web 🌐</p>
      <p>
        O curso é {course.name} e tem {course.hours}h
      </p>
    </div>
  );
}

export default FirstComponent;
