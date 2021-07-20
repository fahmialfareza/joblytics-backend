'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class industrytrend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.industrytrend.belongsTo(models.industry, {
        foreignKey: 'industry_id',
      });
      models.industrytrend.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  industrytrend.init(
    {
      industry_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'industrytrend',
    }
  );
  return industrytrend;
};
