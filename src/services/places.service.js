const axios = require('axios');
const userRepository = require('../repositories/users.repository');
const placeRepository = require('../repositories/places.repository');
const imageRepository = require('../repositories/images.repository');
const transportationRepository = require('../repositories/transportations.repository');
const reviewRepository = require('../repositories/reviews.repository');
const tourGuideRepository = require('../repositories/tourGuide.repository');
const descriptioinRepository = require('../repositories/descriptions.repository');
const { NotFoundError } = require('../errors');

const checkPlaceAvailability = async (id) => {
  const check = await placeRepository.getById(id);
  if (!check) {
    throw new NotFoundError(`Place with ID ${id} Not Found`);
  }
};

const validatePayload = (payload) => {
  return payload.daerah !== '' && payload.object !== '' && payload.mbti !== '';
};

const getAll = async () => {
  const places = await placeRepository.getAll();

  const results = [];

  for (const place of places) {
    const images = await imageRepository.getOneByPlaceId(place.id);

    const result = {
      id: place.id,
      image: images ? images.image : null,
      name: place.name,
      location: place.location,
      rating: place.rating,
      reviews: place.reviews,
    };

    results.push(result);
  }

  return results;
};

const getByMbti = async (payload) => {
  if (!validatePayload(payload)) {
    return await getAll();
  }

  const apiUrl = 'https://recommender-model-c4or5el6dq-as.a.run.app/predict';

  const response = await axios.get(apiUrl, { params: payload });

  const placeIds = response.data.top_10.places_id;

  const results = [];

  for (const placeId of placeIds) {
    const place = await placeRepository.getById(placeId);

    if (place) {
      const images = await imageRepository.getOneByPlaceId(place.id);

      const result = {
        id: place.id,
        image: images ? images.image : null,
        name: place.name,
        location: place.location,
        rating: place.rating,
        reviews: place.reviews,
      };

      results.push(result);
    }
  }

  return results;
};

const search = async (name) => {
  const places = await placeRepository.getByName(name);
  if (!places) {
    throw new NotFoundError(`Place with name ${name} Not Found`);
  }

  const results = [];

  for (const place of places) {
    const images = await imageRepository.getOneByPlaceId(place.id);

    const result = {
      id: place.id,
      image: images ? images.image : null,
      name: place.name,
      location: place.location,
      rating: place.rating,
      reviews: place.reviews,
    };

    results.push(result);
  }

  return results;
};

const getAboutById = async ({ id }) => {
  const place = await placeRepository.getById(id);
  const image = await imageRepository.getAllByPlaceId(id);
  const description = await descriptioinRepository.getAllByPlaceId(id);

  return {
    placeId: place.id,
    image: image ? image : null,
    name: place.name,
    price: place.price,
    about: description ? description : null,
  };
};

const getTypeTransportById = async ({ id }) => {
  const place = await placeRepository.getById(id);
  const image = await imageRepository.getAllByPlaceId(id);
  const transportation = await transportationRepository.getAllTypeByPlaceId(id);

  return {
    placeId: place.id,
    image: image ? image : null,
    name: place.name,
    price: place.price,
    transportation: transportation ? transportation : null,
  };
};

const getReviewById = async ({ id }) => {
  const place = await placeRepository.getById(id);
  const image = await imageRepository.getAllByPlaceId(id);
  const reviews = await reviewRepository.getAllByPlaceId(id);

  const results = [];

  for (const review of reviews) {
    const user = await userRepository.getById(review.userId);

    const result = {
      userName: user ? user.name : null,
      review: review.review,
    };

    results.push(result);
  }

  return {
    placeId: place.id,
    image: image ? image : null,
    name: place.name,
    price: place.price,
    reviews: results ? results : null,
  };
};

const getTourGuideById = async ({ id }) => {
  const place = await placeRepository.getById(id);
  const image = await imageRepository.getAllByPlaceId(id);
  const tourGuide = await tourGuideRepository.getAllByPlaceId(id);

  return {
    placeId: place.id,
    image: image ? image : null,
    name: place.name,
    price: place.price,
    tourGuides: tourGuide ? tourGuide : null,
  };
};

const getOne = async (id) => {
  return await placeRepository.getById(id);
};

const create = async (payload) => {
  await placeRepository.create(payload);
};

const update = async (id, payload) => {
  await checkPlaceAvailability(id);
  return placeRepository.update(id, payload);
};

const remove = async ({ id }) => {
  await checkPlaceAvailability(id);
  return placeRepository.remove(id);
};

module.exports = {
  getByMbti,
  search,
  getAboutById,
  getTypeTransportById,
  getReviewById,
  getTourGuideById,
  getOne,
  create,
  update,
  remove,
};
