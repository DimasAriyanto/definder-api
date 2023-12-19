'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SocialMedia', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.UUID,
      },
      website: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      instagram: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      twitter: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      threads: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      youtube: {
        allowNull: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('SocialMedia');
  },
};
