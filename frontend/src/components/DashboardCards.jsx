export default function DashboardCards() {
  const stats = [
    { title: "Total Audits", value: 54 },
    { title: "Clients", value: 209 },
    { title: "Articles", value: 32 },
    { title: "Pending Tasks", value: 14 },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.title} className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-gray-500">{s.title}</div>
          <div className="text-3xl font-bold mt-2">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
