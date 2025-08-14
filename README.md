# HR+ – Employee Management System

HR+ is a modern **Employee Management System** built with:
- **Backend:** Django REST Framework (DRF)
- **Frontend:** React.js (Vite)
- **Authentication:** JWT (email/password login)
- **Role-based Dashboards:** HR & Employee
- **Database:** SQLite (dev) / PostgreSQL (prod)

---

## 🚀 Features

### **Authentication & Roles**
- Email & password login
- JWT authentication
- Role-based dashboards (HR / Employee)

### **HR Dashboard**
- Manage Employees (Add / Edit / Delete)
- Analytics & Reports (attendance, performance, correlations via pandas)
- Leave Management (view, approve, reject requests)

### **Employee Dashboard**
- Profile view & edit
- Apply for leave (reason & date range)
- View attendance history
- View performance analytics
- View payslips (uploaded by HR)

---

## 🛠️ Tech Stack

**Backend**
- Django REST Framework
- djangorestframework-simplejwt (JWT)
- django-cors-headers
- pandas (analytics)

**Frontend**
- React (Vite)
- Axios
- React Router DOM

---

## 📂 Project Structure

hrplus/
│
├── backend/ # Django backend
│ ├── config/ # Django settings & urls
│ ├── core/ # Main app
│ ├── manage.py
│ └── requirements.txt
│
├── frontend/ # React frontend
│ ├── src/ # React components & pages
│ ├── package.json
│ └── vite.config.js
│
├── .gitignore
└── README.md