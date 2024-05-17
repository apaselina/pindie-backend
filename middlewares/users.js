const userShema = require("../models/user");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await userShema.find({});
  next();
};

const findUserById = async (req, res, next) => {
  try {
    req.user = await userShema.findById(req.param.id);
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
  }
};

const createNewUser = async (req, res, next) => {
  try {
    req.user = await userShema.create(req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await userShema.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await userShema.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
