const axios = require('axios');
const mbtiRepository = require('../repositories/mbti.repository');

const getAll = async (id) => {
  return mbtiRepository.getAll(id);
};

const create = async ({ parameters, userId }) => {
  const apiUrl = 'https://mbti-model-c4or5el6dq-as.a.run.app/predict';

  const response = await axios.get(apiUrl, { params: parameters });

  await mbtiRepository.create({ mbti: response.data.mbti, userId });
};

module.exports = { getAll, create };
