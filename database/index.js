const path = require('path');
const fs = require('fs');
const { Sequelize } = require('sequelize');
const { db } = require('../env.json');

const sequelize = new Sequelize(db.name, db.user, db.password, {
  logging: db.logs,
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  pool: db.pool,
});

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;

const modelDir = path.join(__dirname, '../app/models');
fs.readdirSync(modelDir).forEach(file => {
  const modelName = file.split('.')[0];
  const modelPath = path.join(modelDir, file);
  database[modelName] = require(modelPath)(sequelize, Sequelize);
});

module.exports = database;