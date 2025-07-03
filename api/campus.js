const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

<<<<<<< HEAD
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
=======
router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({ include: Student });
        res.json(campuses);
    }
    catch(err) {
        next(err);
    }
>>>>>>> 6ace57c571526b20f82019940b32791705b1a5a4
});

module.exports = router;
