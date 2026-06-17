export function ComponentsCard({ image, title, description }) {
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  );
}
