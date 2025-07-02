const express = require("express");
const router = express.Router();

const students = [
  { id: 1, firstName: "Jane", lastName: "Doe", campusId: 1 },
  { id: 2, firstName: "John", lastName: "Smith", campusId: 2 }
];

router.get("/", (req, res) => {
  res.json(students);
});

module.exports = router;
