const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
const cors = require("./middlewares/cors");

const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectToDatabase = require("./database/connect");
const pagesRouter = require("./routes/pages");

connectToDatabase();
const PORT = 3001;

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public")),
);

app.listen(PORT);
