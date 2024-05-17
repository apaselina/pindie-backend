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
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  createNewUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", findUserById, deleteUser, sendUserDeleted);

module.exports = usersRouter;
