'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamptrendbyyear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bootcamptrendbyyear.belongsTo(models.bootcamp, {
        foreignKey: 'bootcamp_id',
      });
      models.bootcamptrendbyyear.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  bootcamptrendbyyear.init(
    {
      bootcamp_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'bootcamptrendbyyear',
    }
  );
  return bootcamptrendbyyear;
};
