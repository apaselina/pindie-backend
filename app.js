const express = require("express");
const app = express();
const apiRouter = require("./routes/api");

const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");

connectToDatabase();
const PORT = 3000;
app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  apiRouter
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
