'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.year.hasMany(models.jobtrend, {
        foreignKey: 'year_id',
      });
      models.year.hasMany(models.skilltrend, {
        foreignKey: 'year_id',
      });
      models.year.hasMany(models.industrytrend, {
        foreignKey: 'year_id',
      });
      models.year.hasMany(models.industryneed, {
        foreignKey: 'year_id',
      });
      models.year.hasMany(models.bootcamptrendbyyear, {
        foreignKey: 'year_id',
      });
      models.year.hasMany(models.jobvsbootcamp, {
        foreignKey: 'year_id',
      });
    }
  }
  year.init(
    {
      years: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'year',
    }
  );
  return year;
};
