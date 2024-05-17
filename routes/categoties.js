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

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkEmptyName,
  checkIsCategoryExists,
  createNewCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkEmptyName,
  checkIsCategoryExists,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  findCategoryById,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;
