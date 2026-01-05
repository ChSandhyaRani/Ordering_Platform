import React from "react";
import { useEffect, useState } from "react";
import { fetchOrders, updateOrder } from "../api";
import "../styles/AdminOrders.css";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => { fetchOrders().then(setOrders); }, []);

  const markDelivered = id => {
    updateOrder(id).then(() =>
      setOrders(o => o.map(x => x.id === id ? {...x,status:"Delivered"} : x))
    );
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Orders</h2>

      <div className="admin-list">
        {orders.map(order => (
          <div key={order.id} className="order-row">
            <span><strong>{order.buyer_name}</strong></span>
            <span>{order.product_name}</span>
            <span>{order.quantity}</span>
            <span>{order.address}</span>

            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>

            {order.status === "Pending" && (
              <button onClick={() => markDelivered(order.id)}>
                Mark Delivered
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
