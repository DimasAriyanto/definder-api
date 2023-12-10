const catagoryRepository = require('../repositories/categories');

const getAll = async (req, res, next) => {
  try {
    const result = await catagoryRepository.getCategoryAll();
    res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const result = await catagoryRepository.getCategoryById(req);
    res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await catagoryRepository.createCategory(req);
    res.status(201).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await catagoryRepository.checkAvailableCategory(id);
    const result = await catagoryRepository.deleteCategory(id);
    res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    await catagoryRepository.checkAvailableCategory(id);
    const result = await catagoryRepository.updateCategory(req);
    res.status(200).json({
      status: 'Success',
      message: 'Success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
