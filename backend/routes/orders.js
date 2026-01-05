const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/", (req, res) => {
  const { buyer_name, product_name, quantity, address } = req.body;
  db.run(
    "INSERT INTO orders (buyer_name, product_name, quantity, address) VALUES (?, ?, ?, ?)",
    [buyer_name, product_name, quantity, address],
    function () {
      res.json({ orderId: this.lastID });
    }
  );
});

router.get("/:id", (req, res) => {
  db.get("SELECT id, status FROM orders WHERE id=?", [req.params.id], (err, row) => {
    row ? res.json(row) : res.status(404).json({ message: "Not found" });
  });
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM orders", (err, rows) => res.json(rows));
});

router.put("/:id", (req, res) => {
  db.run("UPDATE orders SET status='Delivered' WHERE id=?", [req.params.id], () => {
    res.json({ success: true });
  });
});

module.exports = router;
