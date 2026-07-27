export default function Card({ title, value, subtitle }) {
  return (
    <div className="card">
      <div>{title}</div>
      <div className="stats">{value}</div>
      <small>{subtitle}</small>
    </div>
  );
}
