const API = "http://localhost:5000/api/audits";

export const getAuditStats = async () => {
  const res = await fetch(`${API}/stats`);
  return res.json();
};
