const { DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  gpa: {
    type: DataTypes.DECIMAL(3, 2),
    validate: { min: 0.0, max: 4.0 },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "temp",
  },
});

module.exports = Student;

//add first name last name
