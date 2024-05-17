const categorySchema = require("../models/category");

const checkIsCategoryExists = async (req, res, next) => {
  const isInArray = req.categoriesArray.find((category) => {
    return req.body.name === category.name;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(
        JSON.stringify({
          message: "Категория с таким названием уже существует",
        })
      );
  } else {
    next();
  }
};

const checkEmptyName = async (req, res, next) => {
  if (!req.body.name) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Введите название категории" }));
  } else {
    next();
  }
};

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
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Ошибка создания категории" }));
  }
};

const updateCategory = async (req, res, next) => {
  try {
    req.category = await categorySchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Ошибка обновления категории" }));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    req.category = await categorySchema.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Ошибка удаления категории" }));
  }
};

module.exports = {
  findAllCategories,
  findCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
};
