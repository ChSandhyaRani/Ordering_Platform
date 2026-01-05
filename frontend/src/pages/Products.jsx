import React from "react";

import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import "../styles/Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => { fetchProducts().then(setProducts); }, []);

  return (
    <div className="product-grid">
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <strong>{p.name}</strong>
          <p>${p.price} / unit</p>
        </div>
      ))}
    </div>
  );
}
