const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

router.get("/", async (req, res) => {
  try {
    const campuses = await Campus.findAll({ include: Student });
    res.json(campuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const campustInput = req.body;
    const newCampus = await Campus.create(campustInput);
    res.json(newCampus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id, { include: Student });
    res.json(campus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.json(campus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
