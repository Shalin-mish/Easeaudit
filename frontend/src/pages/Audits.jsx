export default function Audits() {
  return (
    <>
    
      {/* CHART */}
      <div className="card large">
        <h3>Audit Overview</h3>

        <div className="fake-chart">
          {[38,30,28,25,34,20,30,38,28,18,38,26].map((h, i) => (
            <div
              key={i}
              className={`bar ${i % 2 === 0 ? "blue" : "light"}`}
              style={{ height: `${h * 3}px` }}
            />
          ))}
        </div>

        <p className="legend">
          Financial audit • Internal audit • External audit • Compliance audit •
          IT audit • Forensic audit • Performance audit
        </p>
      </div>

      {/* FIRST ROW – 3 CARDS */}
      <div className="grid-3">
        <AuditCard title="Total Audits" green="46" yellow="14" red="11" />
        <AuditCard title="Internal Audit" green="16" yellow="05" red="04" />
        <AuditCard title="Financial Audit" green="12" yellow="03" red="02" />
      </div>

      {/* SECOND ROW */}
      <div className="grid-3">
        <AuditCard title="External Audit" green="08" yellow="02" red="01" />
        <AuditCard title="Compliance Audit" green="02" yellow="01" red="02" />
        <AuditCard title="IT Audit" green="04" yellow="01" red="00" />
      </div>

      {/* THIRD ROW */}
      <div className="grid-3">
        <AuditCard title="Forensic Audit" green="03" yellow="02" red="02" />
        <AuditCard title="Performance Audit" green="01" yellow="00" red="00" />
      </div>
    </>
  );
}

function AuditCard({ title, green, yellow, red }) {
  return (
    <div className="card">
      <h4>{title}</h4>

      <div style={{ display: "flex", gap: 30, marginTop: 15 }}>
        <div className="green">
          <p>{green}</p>
          <span>Completed</span>
        </div>
        <div className="yellow">
          <p>{yellow}</p>
          <span>In progress</span>
        </div>
        <div className="red">
          <p>{red}</p>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
}
