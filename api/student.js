const express = require("express");
const router = express.Router();
const { Student } = require("../database");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const studentInput = req.body;
    const newStudent = await Student.create(studentInput);
    res.json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
