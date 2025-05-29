'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const config = require(__dirname + '/../config/env.config.js');
const db = {};

let sequelize;

if (config.dbUrl) {
  sequelize = new Sequelize(config.dbUrl, { dialect: config.dialect });
} else {
  sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword);
}

const modelDefiners = [];

// 1. Leer y guardar las definiciones de modelo sin ejecutarlas aún
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const modelDefiner = require(path.join(__dirname, file));
    modelDefiners.push(modelDefiner);
  });

// 2. Inicializar cada modelo y guardarlo en `db`
for (const definer of modelDefiners) {
  const model = definer(sequelize, Sequelize.DataTypes);
  if (!model || !model.name) {
    console.warn('⚠️ Modelo inválido:', model);
    continue;
  }
  db[model.name] = model;
}

// 3. Ejecutar métodos de asociación
for (const modelName of Object.keys(db)) {
  const model = db[modelName];
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
}
db.sequelize = sequelize;

module.exports = db;
