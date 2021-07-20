'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobvsbootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.jobvsbootcamp.belongsTo(models.bootcamp, {
        foreignKey: 'bootcamp_id',
      });
      models.jobvsbootcamp.belongsTo(models.job, {
        foreignKey: 'job_id',
      });
      models.jobvsbootcamp.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  jobvsbootcamp.init(
    {
      job_id: DataTypes.INTEGER,
      bootcamp_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      job_count: DataTypes.INTEGER,
      bootcamp_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'jobvsbootcamp',
    }
  );
  return jobvsbootcamp;
};
