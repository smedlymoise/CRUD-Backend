const express = require("express");
const router = express.Router();
const campusesRouter = require("./campus");
const studentsRouter = require("./student");

router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);

module.exports = router;
