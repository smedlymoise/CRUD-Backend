const express = require("express");
const router = express.Router();
const { Student } = require("../database");

router.get("/", async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;