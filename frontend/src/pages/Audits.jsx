import { useEffect, useState } from "react";
import { getAuditStats } from "../api/auditsDashboard";

export default function Audits() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAuditStats().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  const months = Object.keys(data.monthly);

  return (
    <>
      {/* CHART */}
      <div className="card large">
        <h3>Audit Overview</h3>

        <div className="fake-chart">
          {months.map((month) => {
            const total =
              (data.monthly[month].financial || 0) +
              (data.monthly[month].internal || 0) +
              (data.monthly[month].external || 0) +
              (data.monthly[month].compliance || 0) +
              (data.monthly[month].it || 0) +
              (data.monthly[month].forensic || 0) +
              (data.monthly[month].performance || 0);

            return (
              <div
                key={month}
                className="bar blue"
                style={{ height: `${total * 25}px` }}
                title={`${month}: ${total} audits`}
              />
            );
          })}
        </div>
      </div>

      {/* TOTAL */}
      <div className="card wide">
        <h4>Total Audits</h4>
        <StatRow {...data.total} />
      </div>

      {/* CARDS */}
      <div className="grid-3">
        <AuditCard title="Internal Audit" {...data.internal} />
        <AuditCard title="Financial Audit" {...data.financial} />
        <AuditCard title="External Audit" {...data.external} />
      </div>

      <div className="grid-3">
        <AuditCard title="Compliance Audit" {...data.compliance} />
        <AuditCard title="IT Audit" {...data.it} />
        <AuditCard title="Forensic Audit" {...data.forensic} />
      </div>

      <div className="grid-3">
        <AuditCard title="Performance Audit" {...data.performance} />
      </div>
    </>
  );
}

function AuditCard({ title, completed, inProgress, pending }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <StatRow completed={completed} inProgress={inProgress} pending={pending} />
    </div>
  );
}

function StatRow({ completed, inProgress, pending }) {
  return (
    <div style={{ display: "flex", gap: 30, marginTop: 15 }}>
      <div className="green">
        <p>{completed}</p>
        <span>Completed</span>
      </div>
      <div className="yellow">
        <p>{inProgress}</p>
        <span>In progress</span>
      </div>
      <div className="red">
        <p>{pending}</p>
        <span>Pending</span>
      </div>
    </div>
  );
}
