const Sequelize = require("sequelize")
const sequelize = new Sequelize('u300200084_reportesacabus', 'u300200084_acabus', 'Gsmmaster646', {
  host: '212.1.211.1',
  dialect: 'mysql'
});

module.exports= {sequelize}