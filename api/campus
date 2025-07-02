const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({ include: Student });
        res.json(campuses);
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;