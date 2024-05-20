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
  checkIsUsersAreSafe,
  checkIsVoteRequest
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkAuth,
  checkIsGameExists,
  checkIsCategoriesAvaliable,
  checkEmptyFields,
  createNewGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkAuth,
  checkIsUsersAreSafe,
  checkIsCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, findGameById, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
