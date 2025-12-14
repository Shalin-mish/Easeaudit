import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Layout = () => {
  const location = useLocation();

  const titles = {
    "/": "Overview",
    "/dashboard": "Overview",
    "/audits": "Audits",
    "/clients": "Clients",
    "/articles": "Articles",
    "/contacts": "Contacts",
    "/settings": "Settings",
  };

  const pageTitle = titles[location.pathname] || "";

  return (
    <div className="app">
      <Sidebar />

      <div className="page">
        <Topbar title={pageTitle} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
