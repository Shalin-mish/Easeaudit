const API = "http://localhost:5000/api";

// helper
const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || data.message || "API Error");
  }
  return data;
};

// CONTACTS
export const getContacts = () =>
  fetch(`${API}/contacts`).then(handleResponse);

export const createContact = (data) =>
  fetch(`${API}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

// CLIENTS
export const getClients = () =>
  fetch(`${API}/clients`).then(handleResponse);

export const createClient = (data) =>
  fetch(`${API}/clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);
