const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");
const { string } = require("prop-types");
const sequelize = require("sequelize");

const CreateUserModel = db.define("usuario", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  email: {
    type: string,
    allowNull: true,
  },
  senha: {
    type: string,
    allowNull: true,
  },
  confirmarSenha: {
    type: string,
    allowNull: true,
  },
});

module.exports = CreateUserModel;
