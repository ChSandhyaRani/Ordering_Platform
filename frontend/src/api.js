const API = "http://localhost:5000/api";

export const fetchProducts = () => fetch(`${API}/products`).then(r => r.json());
export const placeOrder = data =>
  fetch(`${API}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(r => r.json());

export const trackOrder = id => fetch(`${API}/orders/${id}`).then(r => r.json());
export const fetchOrders = () => fetch(`${API}/orders`).then(r => r.json());
export const updateOrder = id => fetch(`${API}/orders/${id}`, { method: "PUT" });
