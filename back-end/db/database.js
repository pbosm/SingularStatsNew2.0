const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bdlolcblol', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
