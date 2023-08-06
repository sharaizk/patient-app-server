const { Sequelize, DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");
const Patient = sequelize.define("patients", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
  },
  contactInformation: DataTypes.STRING,
  healthHistory: DataTypes.TEXT,
  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  updatedAt: {
    field: "updated_at",
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Patient;
