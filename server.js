const express = require("express");
const app = express();
const path = require("path");

//where to connect
const port = process.env.PORT || 4000;
const db = require("./knex.js");

// listning app
app.listen(port, () => {
  console.log(`App is listning PORT ${port}`);
});

app.use("/", express.static(path.resolve(__dirname, "./build")));

app.get("/", (req, res) => {
  return res.sendStatus("200");
});
