const { response } = require("express");
const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public")); // middleware to all urls
// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.get("/api/people", async (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.get("/api/peoples", async (req, res) => {
  let { person } = req.query;
  console.log(req.query);

  res.status(201).send(`Success ${person}`);
});

app.post("/api/people", async (req, res) => {
  const { id, people } = req.query;

  return res.json(`{ id : ${id}, people : ${people}}`);
});

// POST = Insert Data
app.post("/login", async (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send("Please Provide Credentials");
});

// Put = Uodate Data
// Delete = Delete Data

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
