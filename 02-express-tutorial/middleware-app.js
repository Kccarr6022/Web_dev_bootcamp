const express = require("express");
app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([authorize, logger])
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Test");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.get("/api/products", (req, res) => {
  res.status(200).send("Producwdats");
});

app.get("/api/items", [authorize, logger], (req, res) => {
  res.status(200).send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
