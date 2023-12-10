'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TempatWisata', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      nama: {
        field: 'nama',
        allowNull: false,
        type: Sequelize.STRING,
      },
      alamat: {
        field: 'alamat',
        allowNull: false,
        type: Sequelize.STRING,
      },
      lintang: {
        field: 'lintang',
        allowNull: false,
        type: Sequelize.DECIMAL(10,8),
      },
      bujur: {
        field: 'bujur',
        allowNull: false,
        type: Sequelize.DECIMAL(10,8),
      },
      mapsUrl: {
        field: 'maps_url',
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        field: 'rating',
        allowNull: false,
        type: Sequelize.DECIMAL(2,1),
      },
      jumlahReview: {
        field: 'jumlah_review',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      deskripsi: {
        field: 'deskripsi',
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('TempatWisata');
  }
};