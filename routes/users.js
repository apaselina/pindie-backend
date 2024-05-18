const usersRouter = require("express").Router();
const {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkAuth,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createNewUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkAuth,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, findUserById, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
