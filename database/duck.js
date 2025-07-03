const { DataTypes } = require("sequelize");
const db = require("./db");

const Duck = db.define("duck", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Duck;
