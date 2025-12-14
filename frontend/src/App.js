import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import Dashboard from "./pages/Dashboard";
import Audits from "./pages/Audits";
import Clients from "./pages/Clients";
import Articles from "./pages/Articles";
import Contacts from "./pages/Contacts";
//import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contacts" element={<Contacts />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
