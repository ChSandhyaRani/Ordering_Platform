const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    res.json(rows);
  });
});

module.exports = router;
