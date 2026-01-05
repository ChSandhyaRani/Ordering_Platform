import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Products from "./pages/Products.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import AdminOrders from "./pages/AdminOrders.jsx";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/order">Place Order</Link>
        <Link to="/track">Track</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/admin" element={<AdminOrders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
