'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class industryneed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.industryneed.belongsTo(models.industry, {
        foreignKey: 'industry_id',
      });
      models.industryneed.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  industryneed.init(
    {
      industry_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
      supply: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'industryneed',
    }
  );
  return industryneed;
};
