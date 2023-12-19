'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TourGuides', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
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
        type: Sequelize.UUID,
      },
      experience: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      languageSpoken: {
        field: 'language_spoken',
        allowNull: false,
        type: Sequelize.STRING
      },
      specializations: {
        allowNull: false,
        type: Sequelize.STRING
      },
      certifications: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availabilitySchedule: {
        field: 'availability_schedule',
        allowNull: false,
        type: Sequelize.STRING
      },
      cost: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('TourGuides');
  }
};