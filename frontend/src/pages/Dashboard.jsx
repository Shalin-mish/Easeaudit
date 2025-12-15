import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/dashboard";
import StatCard from "../components/StatCard"; // ✅ IMPORT

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboardStats().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="dashboard">

      {/* TOP CARDS */}
      <div className="stats-grid">
        <StatCard title="Total Tasks" value={data.totalTasks} percent="1.24%" />
        <StatCard title="Tasks Allotted" value={data.tasksAllotted} percent="-0.24%" />
        <StatCard title="Tasks Completed" value={data.tasksCompleted} percent="0.91%" />
        <StatCard title="Tasks Pending" value={data.tasksPending} percent="1.02%" />
      </div>

      {/* CHART + PIE */}
      <div className="grid-2">
        <div className="card large">
          <h3>Weekly Activity</h3>
          <div className="fake-chart">
            {data.weeklyActivity.map((h, i) => (
              <div
                key={i}
                className={`bar ${i % 2 === 0 ? "blue" : "light"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Expense Statistics</h3>
          <div className="pie">
            <div>{data.expenses.office}% Office</div>
            <div>{data.expenses.personal}% Personal</div>
            <div>{data.expenses.software}% Software</div>
            <div>{data.expenses.others}% Others</div>
          </div>
        </div>
      </div>

      {/* TABLES */}
      <div className="grid-2">
        <div className="card">
          <h3>Due Fees</h3>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Company</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.dueFees.map((d, i) => (
                <tr key={i}>
                  <td>{d.client}</td>
                  <td>{d.company}</td>
                  <td>₹{d.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Upcoming Events</h3>
          <ul className="events">
            {data.events.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
