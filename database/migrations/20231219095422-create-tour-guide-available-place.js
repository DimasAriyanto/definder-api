'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TourGuideAvailablePlaces', {
      tourGuideId: {
        field: 'tour_guide_id',
        allowNull: false,
        references: {
          model: 'TourGuides',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: Sequelize.UUID,
      },
      placeId: {
        field: 'place_id',
        allowNull: false,
        references: {
          model: 'Places',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: Sequelize.UUID,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      deletedAt: {
        field: 'deleted_at',
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TourGuideAvailablePlaces');
  }
};