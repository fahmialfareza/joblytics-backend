'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bootcamp.hasMany(models.bootcamptrendbyyear, {
        foreignKey: 'bootcamp_id',
      });
      models.bootcamp.hasMany(models.jobvsbootcamp, {
        foreignKey: 'bootcamp_id',
      });
    }
  }
  bootcamp.init(
    {
      bootcamp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'bootcamp',
    }
  );
  return bootcamp;
};
