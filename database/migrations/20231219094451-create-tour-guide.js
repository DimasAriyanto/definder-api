'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TourGuides', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
      },
      rating: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      reviews: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cost: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TourGuides');
  }
};