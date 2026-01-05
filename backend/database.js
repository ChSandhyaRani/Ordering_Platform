const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    buyer_name TEXT,
    product_name TEXT,
    quantity INTEGER,
    address TEXT,
    status TEXT DEFAULT 'Pending'
  )`);

  db.get("SELECT COUNT(*) as count FROM products", (err, row) => {
    if (row.count === 0) {
      const stmt = db.prepare("INSERT INTO products (name, price) VALUES (?, ?)");
      [
        ["Tomato", 2.5],
        ["Potato", 1.8],
        ["Carrot", 1.2],
        ["Broccoli", 1.5],
        ["Spinach", 1.5],
        ["Cabbage", 1.8],
        ["Cauliflower", 2.0],
        ["Peas", 2.3],
        ["Apple", 3.2],
        ["Banana", 1.2],
        ["Orange",1.1],
        ["Mango", 1.5],
        ["Strawberry", 2.8],
        ["Pineapple", 1.8],
        ["Watermelon", 1.2],
        ["Kiwi", 3.5]
      ].forEach(p => stmt.run(p));
      stmt.finalize();
    }
  });
});

module.exports = db;
