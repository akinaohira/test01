const express = require("express");
const app = express();

//where to connect
const port = process.env.PROT || 4000;
const db = require("./knex.js");

// listning app
app.listen(port, () => {
  console.log(`App is listning PORT ${port}`);
});

app.get("/", (req, res) => {
  return res.sendStatus("200");
});
