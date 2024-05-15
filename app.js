const express = require("express");
const app = express();
const gamesRouter = require("./routes/games");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categoties");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase =require("./database/connect");

connectToDatabase ();
const PORT = 3000;
app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  usersRouter,
  gamesRouter,
  categoriesRouter
);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});