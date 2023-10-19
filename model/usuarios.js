const { sequelize } = require("../database/db");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define("Usuario",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
})


module.exports = {Usuario}