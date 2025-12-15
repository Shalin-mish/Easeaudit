import { useEffect, useState } from "react";
import { getAuditStats } from "../api/auditsDashboard";

export default function Audits() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAuditStats().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  const months = Object.keys(data.monthly);
  const types = [
    "financial",
    "internal",
    "external",
    "compliance",
    "it",
    "forensic",
    "performance",
  ];

  return (
    <>
      {/* CHART */}
      <div className="card large">
        <h3>Audit Overview</h3>

        <div className="fake-chart">
          {months.map(m =>
            types.map((t, i) => (
              <div
                key={`${m}-${t}`}
                className={`bar ${i % 2 === 0 ? "blue" : "light"}`}
                style={{ height: `${data.monthly[m][t] * 3}px` }}
              />
            ))
          )}
        </div>
      </div>

      <div className="card wide">
        <h4>Total Audits</h4>
        <StatRow {...data.total} />
      </div>

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
