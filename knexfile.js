require("dotenv").config();
module.exports = {
  development: {
    client: "postgres",
    conection: process.env.DATABASE_URL,
    migrations: {
      // directory for where migration goes
      directiory: __dirname + "./migrations",
    },
    seed: {
      // directory for where seed file goes
      directiory: __dirname + "./seeds",
    },
  },
  production: {
    client: "postgres",
    conection: {
      conectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      // directory for where migration goes
      directiory: __dirname + "./migrations",
    },
    seed: {
      // directory for where seed file goes
      directiory: __dirname + "./seeds",
    },
  },
};
