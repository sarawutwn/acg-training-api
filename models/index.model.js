const { Sequelize } = require("sequelize");
const {
  host_postgres,
  config_postgres,
} = require("../connection/setup-sequelize");

//setup sequelize
const sequelize = new Sequelize(host_postgres, config_postgres);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Calculators = require("./schema/calcurator.model")(sequelize, Sequelize);

module.exports = db;