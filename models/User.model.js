// import { Sequelize, DataTypes } from "sequelize";
const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  {
    // THiS WILL ENCRYPT THE PASSWORD BEFORE SAVING
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const hashedPassword = bcrypt.hashSync(user.password, 10);
          user.password = hashedPassword;
        }
      },
    },
  }
);

module.exports = User;
