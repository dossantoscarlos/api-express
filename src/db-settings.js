const Sequelize = require("sequelize")
const dbConfig = require('../config/db-config');
const User = require("../app/model/User");

const connection = new Sequelize(dbConfig)

User.init(connection)

module.exports = connection;