'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      profileLink: {
        field: 'profile_link',
        allowNull: false,
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
    await queryInterface.dropTable('Owners');
  },
};
