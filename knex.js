const knex = require("knex");
const config = require("./knexfile");
require("dotenv").config();

const db = knex(process.env.NODE_ENV ? config.production : config.development);

module.exports = db;

// module.exports = knex(config);
