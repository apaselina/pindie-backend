const pagesRouter = require("express").Router();
const {sendDashboard, sendIndex}= require("../controllers/auth");
const {checkCookiesJWT, checkAuth} =require("../middlewares/auth");
const path = require("path");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;
