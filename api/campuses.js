const express = require("express");
const router = express.Router();

const campuses = [
  { id: 1, name: "BMCC", imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Hunter College", imageUrl: "https://via.placeholder.com/150" }
];

router.get("/", (req, res) => {
  res.json(campuses);
});

module.exports = router;
