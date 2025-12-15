export default function StatCard({ title, value, percent }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{percent}</span>
    </div>
  );
}
