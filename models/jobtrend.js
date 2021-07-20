'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobtrend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.jobtrend.belongsTo(models.job, {
        foreignKey: 'job_id',
      });
      models.jobtrend.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  jobtrend.init(
    {
      job_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'jobtrend',
    }
  );
  return jobtrend;
};
