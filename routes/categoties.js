const categoriesRouter = require("express").Router();

const {
  findAllCategories,
  findCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createNewCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkEmptyName,
  checkAuth,
  checkIsCategoryExists,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  findCategoryById,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;
