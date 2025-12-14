export default function ClientsTable({ clients = [] }) {
  return (
    <table className="w-full bg-white rounded-2xl shadow-lg">
      <thead className="bg-[#E8F0FF]">
        <tr>
          <th className="p-3 text-left">Client</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Rating</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((c, i) => (
          <tr key={i} className="border-b last:border-none">
            <td className="p-3">{c.name}</td>
            <td className="p-3">{c.email}</td>
            <td className="p-3">{c.rating ?? "—"}</td>
            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-lg text-white ${
                  c.status === "Active"
                    ? "bg-green-500"
                    : c.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {c.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
