const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('plantes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
