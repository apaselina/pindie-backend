const gamesRouter = require("express").Router();
const {
  findAllGames,
  findGameById,
  createNewGame,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIsGameExists,
  checkIsCategoriesAvaliable,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIsCategoriesAvaliable,
  checkEmptyFields,
  createNewGame,
  sendGameCreated
);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", findGameById, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
