import Events from "../components/Events";
import { CORE_CONCEPTS } from "../data/content";
import { ComponentsCard } from "../components/ComponentsCard";

export default function EventsPage() {
  return (
    <div>
      <h5>Os meus Eventos</h5>
      <Events />
      <h5>Conceitos</h5>
      {CORE_CONCEPTS.map((item, index) => (
        <ComponentsCard {...item} key={index} />
      ))}
    </div>
  );
}
