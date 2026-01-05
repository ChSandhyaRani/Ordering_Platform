import React from "react";

import { useState } from "react";
import { placeOrder } from "../api";
import "../styles/PlaceOrder.css";

export default function PlaceOrder() {
  const [form, setForm] = useState({});
  const [id, setId] = useState(null);

  const submit = () => placeOrder(form).then(r => setId(r.orderId));

  return (
    <div className="order-form">
      <input placeholder="Buyer Name" onChange={e=>setForm({...form,buyer_name:e.target.value})}/>
      <input placeholder="Product Name" onChange={e=>setForm({...form,product_name:e.target.value})}/>
      <input type="number" placeholder="Quantity" onChange={e=>setForm({...form,quantity:e.target.value})}/>
      <input placeholder="Address" onChange={e=>setForm({...form,address:e.target.value})}/>
      <button onClick={submit}>Place Order</button>
      {id && <div className="order-id">Order ID: {id}</div>}
    </div>
  );
}
