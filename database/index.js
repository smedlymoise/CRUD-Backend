const db = require("./db");
const Campus = require("./campus");
const Student = require("./student");
const { Sequelize } = require("sequelize");

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Campus,
  Student
};