import React from "react";

import { useState } from "react";
import { trackOrder } from "../api";
import "../styles/TrackOrder.css";

export default function TrackOrder() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState(null);

  return (
    <div className="track-container">
      <input placeholder="Order ID" onChange={e=>setId(e.target.value)} />
      <button onClick={()=>trackOrder(id).then(setStatus)}>Track</button>
      {status && <div className="track-box">Status: {status.status}</div>}
    </div>
  );
}
