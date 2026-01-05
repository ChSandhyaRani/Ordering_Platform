const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));

app.listen(5000, () => console.log("Backend running on port 5000"));
