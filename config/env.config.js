// config/envLoader.js
const dotenv = require('dotenv');
const path = require('path');

// 1. Determinar entorno y cargar el archivo correspondiente
const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${env}`)
});

// 2. Obtener las variables una vez cargadas
const {
  NODE_ENV,
  PORT,
  DATABASE_URL,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_DIALECT,
  JWT_SECRET,
  USER_PASS_TEMP
} = process.env;

// 3. Centralizar la configuración por entorno (puedes omitir duplicación si es igual)
const config = {
  env: NODE_ENV || 'development',
  port: PORT || 3000,
  dbUser: DATABASE_USER,
  dbPassword: DATABASE_PASSWORD,
  dbHost: DATABASE_HOST,
  dbName: DATABASE_NAME,
  dbPort: DATABASE_PORT,
  dbDialect: DATABASE_DIALECT,
  dbUrl: DATABASE_URL,
  jwtSecret: JWT_SECRET,
  userPassTemp: USER_PASS_TEMP
};

module.exports = config;
