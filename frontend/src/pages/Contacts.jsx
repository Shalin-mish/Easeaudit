import React, { useEffect, useState } from "react";
import { getContacts, createContact } from "../services/api";

export default function Contacts() {
  const [clients, setClients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await getContacts();
      setClients(data);
    } catch (err) {
      setError("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.company) {
      alert("Client name and company are required");
      return;
    }

    try {
      await createContact(form);
      setShowForm(false);
      setForm({
        name: "",
        company: "",
        address: "",
        email: "",
        phone: "",
      });
      loadContacts();
    } catch (err) {
      alert("Failed to save contact");
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading contacts...</p>;
  if (error) return <p style={{ padding: 20, color: "red" }}>{error}</p>;

  return (
    <div className="contacts-page">

      {/* FILTER BAR */}
      <div className="card filters-bar">
        <div className="filters-left">
          <select><option>Client type: All</option></select>
          <select><option>Region: All</option></select>
          <select><option>Company name: All</option></select>
        </div>

        <div className="filters-right">
          <span>{clients.length} Items</span>
          <button className="btn" onClick={() => setShowForm(true)}>
            + ADD CLIENT
          </button>
        </div>
      </div>

      {/* ADD CLIENT FORM */}
      {showForm && (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Add Client</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 16,
            }}
          >
            <input
              placeholder="Client name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="Company name *"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <input
              placeholder="Region / Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div style={{ marginTop: 20, textAlign: "right" }}>
            <button className="btn" onClick={handleSubmit}>
              Save Client
            </button>
          </div>
        </div>
      )}

      {/* CONTACTS TABLE */}
      <div className="card" style={{ marginTop: 20 }}>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Client name</th>
              <th>Company name</th>
              <th>Region / Address</th>
              <th>E-mail</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c, i) => (
              <tr key={c._id}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.company}</td>
                <td>{c.address || "—"}</td>
                <td>{c.email || "—"}</td>
                <td>{c.phone || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
