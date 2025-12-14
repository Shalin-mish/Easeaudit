import React, { useEffect, useState } from "react";
import { getClients } from "../services/api";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

/* ===== STATIC UI DATA (CHARTS KE LIYE OK) ===== */

const retentionData = [
  { month: "Oct", lost: -8, new: 8, avg: -2 },
  { month: "Nov", lost: -5, new: 5, avg: 2 },
  { month: "Dec", lost: -9, new: 9, avg: -1 },
  { month: "Jan", lost: -8, new: 8, avg: 3 },
  { month: "Feb", lost: -7, new: 7, avg: -1 },
  { month: "Mar", lost: -6, new: 10, avg: 4 },
];

const satisfactionData = [
  { month: "Oct", value: 45 },
  { month: "Nov", value: 100 },
  { month: "Dec", value: 90 },
  { month: "Jan", value: 50 },
  { month: "Feb", value: 100 },
  { month: "Mar", value: 95 },
];

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients(); // 🔥 DB se data
    setClients(data);
  };

  return (
    <div className="clients-page">
      {/* ================= CLIENT RETENTION ================= */}
      <div className="card large-card">
        <div className="card-header">
          <h3>Client Retention</h3>

          <div className="legend">
            <span className="lost">Lost Clients</span>
            <span className="new">New Clients</span>
            <span className="avg">Average Retention</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={retentionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="lost" fill="#1D4ED8" radius={[6, 6, 0, 0]} />
            <Bar dataKey="new" fill="#DBEAFE" radius={[6, 6, 0, 0]} />
            <Line
              type="monotone"
              dataKey="avg"
              stroke="#9CA3AF"
              strokeDasharray="5 5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid-2">
        {/* ===== SATISFACTION ===== */}
        <div className="card">
          <h3>Clients satisfaction level</h3>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={satisfactionData}>
              <defs>
                <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F6EF7" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#4F6EF7" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4F6EF7"
                fill="url(#colorSat)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ===== CLIENTS FROM DATABASE ===== */}
        <div className="card">
          <h3>Client Rating (From Database)</h3>

          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Company</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((c, i) => (
                <tr key={c._id}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.company}</td>
                  <td>{c.rating || "--"} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;
