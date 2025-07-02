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
    validate: { isEmail: true, }
  },
  gpa: {
    type: DataTypes.DECIMAL(3, 2),
    validate: { min: 0.00, max: 4.00, }
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "temp",
  },
});

module.exports = Student;