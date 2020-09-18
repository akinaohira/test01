// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    // migrations: {
    //   tableName: "knex_migrations", // list of migration will be
    // },
  },
};
