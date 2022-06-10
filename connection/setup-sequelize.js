require("dotenv").config();

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;
const db_type = process.env.DB_TYPE;

const host_postgres = `${db_type}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
const config_postgres = {
    logging: false,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
      timezone: "+07:00",
    },
    timezone: "+07:00",
    operatorsAliases: 0,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
}

module.exports = {
    host_postgres,
    config_postgres
}