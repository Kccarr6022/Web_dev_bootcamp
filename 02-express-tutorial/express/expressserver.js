const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log(`server is listening on port 5000...`);
});

// app.get GET = Read Data
// app.post POST = Insert Data
// app.put Post = Update Data
// app.delete DELETE = Delete Data
// app.all
// app.use
// app.listen
