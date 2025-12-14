📘 AuditEase – MERN Stack Project

AuditEase is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The project demonstrates frontend–backend integration, REST APIs, and database operations as per the assignment requirements.

🚀 Tech Stack

Frontend

React.js

HTML5

CSS3

JavaScript (ES6)

Recharts (for charts)

Backend

Node.js

Express.js

Database

MongoDB (MongoDB Compass)

✨ Features
✅ Contacts Module (Database Integrated)

Add new contacts using a form

Fetch contacts from MongoDB

Display contacts in a table

Fully connected via REST APIs

✅ Clients Module (Database Integrated)

Fetch client data from MongoDB

Display clients with ratings

Charts used for visual representation (UI-based)

🟡 Articles Module (UI-Driven)

Add articles using React state

Display articles in a table

No database integration (optional as per scope)

🟡 Audits Module (UI-Driven)

Static / dummy data

Used for charts and status visualization

📊 Dashboard

Overview of system data

Charts and stats (UI-based)

🗂️ Project Structure
AuditEase/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── Clients.jsx
│   │   │   ├── Articles.jsx
│   │   │   └── Audits.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── components/
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Client.js
│   ├── routes/
│   │   ├── contacts.js
│   │   ├── clients.js
│   │   ├── articles.js
│   │   └── audits.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── screenshots/
│   ├── dashboard.png
│   ├── contacts.png
│   ├── clients.png
│   ├── articles.png
│   ├── mongodb_contacts.png
│   └── mongodb_clients.png
│
└── README.md

⚙️ How to Run the Project
1️⃣ Backend Setup
cd backend
npm install
npm start


Backend runs on:

http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

🗄️ Database

Database Name: auditEase

Collections used:

contacts

clients

MongoDB is connected using Mongoose and data is accessed via REST APIs.

📸 Screenshots

Screenshots of the following are included:

Dashboard UI

Contacts page (UI + DB)

Clients page (UI + DB)

Articles page

MongoDB Compass collections

🧠 Assignment Notes

Frontend fetches data from backend APIs.

Backend handles CRUD operations and connects to MongoDB.

Articles and Audits modules are UI-driven as allowed by the assignment scope.

Contacts and Clients modules demonstrate full MERN integration.

👩‍💻 Developed By

Shalini Mishra
MERN Stack Developer
📍 India