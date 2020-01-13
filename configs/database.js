var knex = require('knex')({
    client: 'mysql',
    connection: {
      timezone: "+07:00",
      host : "localhost",
      user : "root",
      port : "3306",
      password : "",
      database : "warung-pintar"
    }
});

module.exports = knex;
