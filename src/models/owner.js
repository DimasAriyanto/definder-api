'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Owner.belongsTo(models.User);
      Owner.hasMany(models.Place, {
        foreignKey: 'ownerId',
      });
    }
  }
  Owner.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
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
        type: DataTypes.UUID,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      profileLink: {
        field: 'profile_link',
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Owner',
      tableName: 'Owners',
      underscored: true,
      paranoid: true,
    }
  );
  return Owner;
};
