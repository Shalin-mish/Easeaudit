export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* TOP CARDS */}
      <div className="stats-grid">
        <StatCard title="Total Tasks" value="125" percent="1.24%" />
        <StatCard title="Tasks Allotted" value="112" percent="-0.24%" />
        <StatCard title="Tasks Completed" value="98" percent="0.91%" />
        <StatCard title="Tasks Pending" value="14" percent="1.02%" />
      </div>

      {/* CHART + PIE */}
      <div className="grid-2">
        <div className="card large">
          <h3>Weekly Activity</h3>
          <div className="fake-chart">
            <div className="bar blue" style={{ height: "80%" }} />
            <div className="bar light" style={{ height: "45%" }} />
            <div className="bar blue" style={{ height: "65%" }} />
            <div className="bar light" style={{ height: "30%" }} />
            <div className="bar blue" style={{ height: "75%" }} />
            <div className="bar light" style={{ height: "55%" }} />
          </div>
        </div>

        <div className="card">
          <h3>Expense Statistics</h3>
          <div className="pie">
            <div>35% Office</div>
            <div>30% Personal</div>
            <div>20% Software</div>
            <div>15% Others</div>
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
              <tr>
                <td>Shirley.H</td>
                <td>Techsolutions Inc.</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td>George.V</td>
                <td>GlobalEats</td>
                <td>$25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Upcoming Events</h3>
          <ul className="events">
            <li>Internal Training – Apr 24, 2024</li>
            <li>Client Meeting – May 2, 2024</li>
            <li>Audit Review – May 10, 2024</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

/* COMPONENTS */
function StatCard({ title, value, percent }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span>{percent}</span>
    </div>
  );
}
