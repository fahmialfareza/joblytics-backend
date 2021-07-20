'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companyjobdemand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.companyjobdemand.belongsTo(models.company, {
        foreignKey: 'company_id',
      });
      models.companyjobdemand.belongsTo(models.job, {
        foreignKey: 'job_id',
      });
    }
  }
  companyjobdemand.init(
    {
      company_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'companyjobdemand',
    }
  );
  return companyjobdemand;
};
