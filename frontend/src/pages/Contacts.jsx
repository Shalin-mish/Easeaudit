import React, { useEffect, useState } from "react";
import { getContacts, createContact } from "../services/api";

export default function Contacts() {
  const [clients, setClients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", address: "", email: "", phone: ""
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const data = await getContacts();
    setClients(data);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.company) {
      alert("Fill required fields");
      return;
    }
    await createContact(form);   // ✅ CORRECT API
    setShowForm(false);
    setForm({
      name: "",
      company: "",
      address: "",
      email: "",
      phone: "",
    });
    loadContacts();
  };

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
          <span>{clients.length} Item selected</span>
          <button className="btn" onClick={() => setShowForm(true)}>
            + ADD CLIENT
          </button>
        </div>
      </div>

      {/* ADD FORM */}
      {showForm && (
        <div className="card">
          <input placeholder="Client name"
            onChange={e=>setForm({...form,name:e.target.value})}/>
          <input placeholder="Company name"
            onChange={e=>setForm({...form,company:e.target.value})}/>
          <input placeholder="Region / Address"
            onChange={e=>setForm({...form,address:e.target.value})}/>
          <input placeholder="Email"
            onChange={e=>setForm({...form,email:e.target.value})}/>
          <input placeholder="Phone"
            onChange={e=>setForm({...form,phone:e.target.value})}/>
          <button className="btn" onClick={handleSubmit}>
            Save Client
          </button>
        </div>
      )}

      {/* TABLE */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Client name</th>
              <th>Company name</th>
              <th>Region/Address</th>
              <th>E-mail</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c,i)=>(
              <tr key={c._id}>
                <td>{i+1}</td>
                <td>{c.name}</td>
                <td>{c.company}</td>
                <td>{c.address}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
