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
  if (!id) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide id value" });
  }
  if (!people) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide people value" });
  }

  return res.json(`{ id : ${id}, people : ${people}}`);
});

app.post("/api/people/postman", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(200).json({ success: true, data: [...people, name] });
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
app.put("/api/people/postman/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  try {
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` });
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    return res.status(200).json({ success: true, data: newPeople });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ success: false, msg: error });
  }
});

// Delete = Delete Data
app.delete("/api/people/postman/:id", async (req, res) => {
  console.log("delete request");
  try {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` });
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id) );
    return res.json({success:true, data: newPeople})
  } catch (error) {
    console.log(error);
    console.log('here')
    return res.status(404).json({ success: false, msg: error });
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
