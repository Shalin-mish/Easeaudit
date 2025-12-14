const API = "http://localhost:5000/api";

// CONTACTS
export const getContacts = () =>
  fetch(`${API}/contacts`).then(r => r.json());

export const createContact = (data) =>
  fetch(`${API}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());

// CLIENTS
export const getClients = () =>
  fetch(`${API}/clients`).then(r => r.json());

export const createClient = (data) =>
  fetch(`${API}/clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());
