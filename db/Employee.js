const conn = require('./conn');
const { Sequelize } = conn;

const Employee = conn.define('employee', {
  name: Sequelize.STRING,
  bio: Sequelize.TEXT
});

module.exports = Employee;
