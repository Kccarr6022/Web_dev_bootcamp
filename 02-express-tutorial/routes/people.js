const express = require("express");
const router = express.Router();

let { people } = require('../data')


router.get("/", async (req, res) => {
    res.status(200).json({ success: true, data: people });
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const person = people.find((person) => person.id === Number(id));
        
        if (!person) {
            return res
            .status(404)
            .json({ success: false, msg: `No person with the id ${id}` });
        }
        
        return res.status(200).json({ success: true, data: person });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, msg: error });
  }
});

router.post("/", async (req, res) => {
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

router.post("/postman", async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
    }
    res.status(200).json({ success: true, data: [...people, name] });
});

// Put = Uodate Data
router.put("/postman/:id", async (req, res) => {
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
router.delete("/postman/:id", async (req, res) => {
  console.log("delete request");
  try {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` });
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    return res.json({ success: true, data: newPeople });
  } catch (error) {
    console.log(error);
    console.log("here");
    return res.status(404).json({ success: false, msg: error });
  }
});

module.exports = router;