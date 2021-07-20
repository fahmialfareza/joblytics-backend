'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class industry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.industry.hasMany(models.industryneed, {
        foreignKey: 'industry_id',
      });
      models.industry.hasMany(models.industrytrend, {
        foreignKey: 'industry_id',
      });
    }
  }
  industry.init(
    {
      industry: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'industry',
    }
  );
  return industry;
};
