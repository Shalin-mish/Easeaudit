import React from "react";

const Topbar = ({ title }) => {
  return (
    <div className="topbar">
      <h2>{title}</h2>

      <div className="topbar-right">
        <input placeholder="Search..." />
        <span>🔔</span>
        <span>⚙️</span>
        <span>👤</span>
      </div>
    </div>
  );
};

export default Topbar;
