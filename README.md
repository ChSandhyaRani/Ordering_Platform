# Bulk Vegetable/Fruit Ordering Platform

A simple web application to browse vegetables/fruits, place bulk orders, track orders, and manage them via an admin panel.  
Built with **React.js** for the frontend, **Node.js + Express** for the backend, and **SQLite** as the database.

---

## 🌐 Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** SQLite
- **Hosting:** Frontend (Vercel / Netlify)
- **Styling:** CSS (Responsive & modern card layout)

---

## ✅ Features Implemented

### Buyer
- Browse vegetable and fruit products
- View product name & price per unit
- Place bulk orders by providing:
  - Product name
  - Quantity
  - Buyer name
  - Delivery address
- Track order status by Order ID (`Pending` / `Delivered`)

### Admin
- View all placed orders
  - Buyer name, Product name, Quantity, Delivery address, Status
- Update order status: `Pending → Delivered`
- Responsive card/table layout for desktop and mobile

---

## 📦 Steps to Run Locally

### 1. Backend
```bash
cd backend
npm install
node server.js


### 1. Frontend
```bash
cd frontend
npm install
npm start
