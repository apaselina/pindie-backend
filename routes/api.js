const apiRouter = require("express").Router();
const categoriesRouter = require("./categoties");
const usersRouter = require("./users");
const gamesRouter = require("./games");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);

module.exports = apiRouter;