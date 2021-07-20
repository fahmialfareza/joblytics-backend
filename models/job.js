'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.job.hasMany(models.jobtrend, {
        foreignKey: 'job_id',
      });
      models.job.hasMany(models.jobtrendbycity, {
        foreignKey: 'job_id',
      });
      models.job.hasMany(models.companyjobdemand, {
        foreignKey: 'job_id',
      });
      models.job.hasMany(models.jobvsbootcamp, {
        foreignKey: 'job_id',
      });
    }
  }
  job.init(
    {
      jobs: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'job',
    }
  );
  return job;
};
