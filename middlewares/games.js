const gameShema = require("../models/game");

const checkEmptyFields = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.image ||
    !req.body.link ||
    !req.body.developer
  ) {
    res.status(400).send({ message: "Заполните все поля" });
  } else {
    next();
  }
};

const checkIsGameExists = async (req, res, next) => {
  console.log(req.gameArray);
  const isInArray = req.gamesArray.find((game) => {
    return req.body.title === game.title;
  });
  console.log(isInArray);
  if (isInArray) {
    res.status(400).send({ message: "Игра с таким названием уже существует" });
  } else {
    next();
  }
};

const checkIsCategoriesAvaliable = async (req, res, next) => {
  if (!req.body.categories || req.body.categories.lenght === 0) {
    res.headers = {"Content-Type": "application/json"};
    res.status(400).send({ message: "Выберите хотя бы одну категорию"});
  } else {
    next();
  }
};

const findAllGames = async (req, res, next) => {
  req.gamesArray = await gameShema
    .find({})
    .populate({ path: "users", select: "-password" })
    .populate("categories");
  next();
};

const findGameById = async (req, res, next) => {
  try {
    req.game = await gameShema.findById(req.param.id).populate("categories").populate("users");
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Игра не найдена"}));
  }
};

const createNewGame = async (req, res, next) => {
  try {
    req.game = await gameShema.create(req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateGame = async (req, res, next) => {
  try {
    req.game = await gameShema.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteGame = async (req, res, next) => {
  try {
    req.game = await gameShema.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  findAllGames,
  findGameById,
  createNewGame,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIsGameExists,
  checkIsCategoriesAvaliable
};
