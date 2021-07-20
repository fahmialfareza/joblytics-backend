'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobtrendbycity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.jobtrendbycity.belongsTo(models.city, {
        foreignKey: 'city_id',
      });
      models.jobtrendbycity.belongsTo(models.job, {
        foreignKey: 'job_id',
      });
    }
  }
  jobtrendbycity.init(
    {
      city_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'jobtrendbycity',
    }
  );
  return jobtrendbycity;
};
