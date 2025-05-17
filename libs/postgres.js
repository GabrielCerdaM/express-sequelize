const { Client } = require('pg')

async function getConnection() {

  const client = new Client({
    host: 'postgres',
    port: 5432,
    user: 'saitama', // process.env.POSTGRES_USER
    password: 'saitama123', // process.env.POSTGRES_PASSWORD
    database: 'saitama' //process.env.POSTGRES_DB
  });

  await client.connect();
  return client;
}

module.exports = { getConnection }
