const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

const sequelize = require("sequelize");

const CreateUserModel = db.define(
  "user",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  { timestamps: true, tableName: "user" }
);

module.exports = CreateUserModel;
