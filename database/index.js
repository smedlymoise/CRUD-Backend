const db = require("./db");
const Campus = require("./campus");
const Student = require("./student");
const { Sequelize } = require("sequelize");

Student.belongsTo(Campus, {
  foreignKey: "campusId",
});
Campus.hasMany(Student, {
  foreignKey: "campusId",
  onDelete: "CASCADE",
});

module.exports = {
  db,
  Campus,
  Student,
};
