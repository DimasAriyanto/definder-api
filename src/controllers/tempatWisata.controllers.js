const tempatWisataRepository = require('../repositories/tempatwisata');
const catagoryRepository = require('../repositories/categories');

const getAll = async (req, res, next) => {
  try {
    const result = await tempatWisataRepository.getTempatWisataAll();
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
    await tempatWisataRepository.checkAvailableTempatWisata(req.params.id);
    const result = await tempatWisataRepository.getTempatWisataById(req);
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
    await catagoryRepository.checkAvailableCategory(req.body.catagory_id);
    const result = await tempatWisataRepository.createTempatWisata(req);
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
    await tempatWisataRepository.checkAvailableTempatWisata(id);
    const result = await tempatWisataRepository.deleteTempatWisata(id);
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
    await tempatWisataRepository.checkAvailableTempatWisata(id);
    const result = await tempatWisataRepository.updateTempatWisata(req);
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
