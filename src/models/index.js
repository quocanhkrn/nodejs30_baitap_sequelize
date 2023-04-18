const { Sequelize } = require("sequelize");
const { db_host, db_port, db_user, db_pass, db_dialect, db_database } = require("../config/config");

const sequelize = new Sequelize(db_database, db_user, db_pass, {
  host: db_host,
  port: db_port,
  dialect: db_dialect,
});

module.exports = sequelize;
