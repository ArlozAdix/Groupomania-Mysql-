const Sequelize = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'admin', {dialect : 'mysql', host : 'localhost'})

module.exports = sequelize;