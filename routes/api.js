const apiRouter = require("express").Router();
const categoriesRouter = require("./categoties");
const usersRouter = require("./users");
const gamesRouter = require("./games");
const authRouter = require("./auth");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;