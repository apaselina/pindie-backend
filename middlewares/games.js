const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find().populate("users").populate("categories");
  console.log(req.gamesArray);
  next();
};

module.exports = findAllGames;
