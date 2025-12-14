import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">Q</div>
        Audit Ease.
      </div>

      <div className="menu">
        <NavLink to="/" className="menu-item">🏠 Dashboard</NavLink>
        <NavLink to="/audits" className="menu-item">📊 Audits</NavLink>
        <NavLink to="/clients" className="menu-item">👤 Clients</NavLink>
        <NavLink to="/articles" className="menu-item">📄 Articles</NavLink>
        <NavLink to="/contacts" className="menu-item">📞 Contacts</NavLink>
        <NavLink to="/settings" className="menu-item">⚙️ Settings</NavLink>
      </div>

      <div className="logout" onClick={logout}>
        🚪 Logout
      </div>
    </div>
  );
}
