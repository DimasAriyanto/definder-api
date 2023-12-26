const Decimal = require('decimal.js');
const placeRepository = require('../repositories/places.repository');
const reviewRepository = require('../repositories/reviews.repository');
const { NotFoundError } = require('../errors');

const checkReviewAvailability = async (id) => {
  const check = await reviewRepository.checkAvailability(id);
  if (!check) {
    throw new NotFoundError(`Review with ID ${id} Not Found`);
  }
};

const getAll = async () => {
  return reviewRepository.getAll();
};

const getById = async ({ id }) => {
  await checkReviewAvailability(id);
  return reviewRepository.getById(id);
};

const getByPlaceId = async ({ id }) => {
  await placeRepository.checkAvailability(id);
  return reviewRepository.getAllByPlaceId(id);
};

const updateRatingAndReview = async ({ id, rating }) => {
  try {
    const place = await placeRepository.getById(id);
    const sumRating = await reviewRepository.countRatingByPlace(id);

    const newSumReview = place.reviews + 1;

    const newSumRating = new Decimal(place.rating)
      .times(sumRating)
      .plus(rating)
      .dividedBy(newSumReview)
      .toNumber();

    await placeRepository.updateRatingAndReview(id, {
      rating: newSumRating,
      reviews: newSumReview,
    });
  } catch (error) {
    console.error('Error updating rating and review:', error);
    throw error;
  }
};

const create = async (payload) => {
  try {
    await updateRatingAndReview({ id: payload.placeId, rating: payload.rating });

    const result = await reviewRepository.create(payload);

    return result;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

const update = async ({ id, place_id: placeId, userId, review, rating }) => {
  try {
    await checkReviewAvailability(id);
    await updateRatingAndReview({ id: placeId, rating });

    return reviewRepository.update(id, { placeId, userId, review, rating });
  } catch (error) {
    console.error('Error updating review:', error);
    throw error;
  }
};

const remove = async ({ id }) => {
  try {
    await checkReviewAvailability(id);
    const review = await reviewRepository.getById(id);

    await reviewRepository.remove(id);

    if (review) {
      await updateRatingAndReview({ id: review.placeId, rating: -review.rating });
    }
  } catch (error) {
    console.error('Error removing review:', error);
    throw error;
  }
};

module.exports = { checkReviewAvailability, getAll, getById, getByPlaceId, create, update, remove };
