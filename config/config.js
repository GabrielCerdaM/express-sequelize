require('dotenv').config()

const {
  NODE_ENV,
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PORT,
  JWT_SECRET,
  USER_PASS_TEMP
} = process.env;

const config = () => {
  return {
    env: NODE_ENV || 'env',
    port: PORT || 3000,
    dbUser: POSTGRES_USER,
    dbPassword: POSTGRES_PASSWORD,
    dbHost: POSTGRES_HOST,
    dbName: POSTGRES_DB,
    dbPort: POSTGRES_PORT,
    jwtSecret: JWT_SECRET,
    userPassTemp: USER_PASS_TEMP
  }
}

module.exports = { config }
