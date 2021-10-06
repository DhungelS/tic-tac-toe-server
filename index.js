const express = require("express");
const app = express();
var path = require("path");
const cors = require('cors')
const fs = require("fs");
app.use(express.static(path.join(__dirname, "build")));

app.use(cors())

app.get("/api/v1/tictactoe", (req, res) => {
  var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
  res.json(data);
});
app.post("/api/v1/tictactoe", (req, res) => {
  var data = JSON.stringify(req.data);
  fs.writeFileSync("data.json", data);
  res.status(201).end();
});

const port = 3002;

app.listen(process.env.PORT || port, () => {
  console.log(`listening on ${port}`);
});
