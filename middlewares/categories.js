const categorySchema = require("../models/category");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categorySchema.find({});
  next();
};

const findCategoryById = async (req, res, next) => {
  try {
    req.category = await categorySchema.findById(req.param.id);
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Категория не найдена" }));
  }
};

const createNewCategory = async (req, res, next) => {
  try {
    req.category = await categorySchema.create(req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    req.category = await categorySchema.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    req.category = await categorySchema.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  findAllCategories,
  findCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
