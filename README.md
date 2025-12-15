# AuditEase – MERN Stack Audit Management Dashboard

AuditEase is a full-stack MERN application built to manage audits, articles, clients, and contacts with a dynamic dashboard that visualizes audit statistics in real time.

This project demonstrates backend-driven dashboards where all statistics and charts are derived dynamically from MongoDB (no hard-coded data).

---

## 🚀 Features

### 📊 Dashboard
- Monthly audit overview chart
- Audit status tracking (Completed / In Progress / Pending)
- Audit categorization:
  - Financial
  - Internal
  - External
  - Compliance
  - IT
  - Forensic
  - Performance
- Fully dynamic data fetched from backend APIs

### 🧾 Audits
- Add audits via REST API
- Dashboard statistics generated from audit records
- Month-wise and status-wise aggregation

### 🧑‍💼 Articles
- Task assignment with deadlines
- Past task tracking
- Status management (On Work / Available / On Leave)
- Dynamic tables and status visualization

### 🏢 Clients & 📇 Contacts
- Client and contact data management
- REST-based CRUD operations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS (Flexbox & Grid)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools
- Git & GitHub
- Postman (API testing)

---

## 📂 Project Structure

Easeaudit/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shalin-mish/Easeaudit.git
cd Easeaudit
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auditease
Run the backend server:

bash
Copy code
npm start
Backend will run on:

arduino
Copy code
http://localhost:5000
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend will run on:

arduino
Copy code
http://localhost:3000
🔗 API Endpoints
Audits
POST /api/audits → Add audit

GET /api/audits → Get all audits

GET /api/audits/stats → Dashboard statistics (aggregated)

Articles
POST /api/articles

GET /api/articles

GET /api/articles/available

GET /api/articles/status

Clients
GET /api/clients

POST /api/clients

Contacts
GET /api/contacts

POST /api/contacts

📊 Dashboard Data Flow
nginx
Copy code
MongoDB → Express APIs → Aggregation Logic → React Dashboard UI
No static or hard-coded data

Dashboard updates automatically when data changes

🧪 Testing
APIs tested using Postman

Audit and article data added via POST requests

Dashboard verified using real MongoDB data

📌 Notes
Focused on backend-driven dashboard logic

Clean separation of frontend and backend

Scalable and interview-ready architecture

👩‍💻 Author
Shalini Mishra
MERN Stack Developer
GitHub: https://github.com/Shalin-mish

yaml
Copy code
🎥 Project Walkthrough Video

A short walkthrough of the application explaining features, data flow, and dashboard logic:

▶️ Watch here: https://www.loom.com/share/0bac61dbdf3544339ab70338edd8c5a5