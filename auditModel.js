const Sequelize = require('sequelize');

const sequelize = require('./database');

const Audit = sequelize.define('audit', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  status: {
    type: Sequelize.ENUM,
    values: ['Error', 'Success']
  },
  data: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Audit;
