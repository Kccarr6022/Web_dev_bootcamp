const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
  getPeople,
  getPerson,
  createPerson,
  createPersonPostman,
  updatePersonPostman,
  deletePersonPostman,
} = require("../controllers/people");

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router
  .route("/:id")
  .get(getPerson)
  .put(updatePersonPostman)
  .delete(deletePersonPostman);

module.exports = router;
