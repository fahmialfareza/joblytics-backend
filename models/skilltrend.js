'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skilltrend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.skilltrend.belongsTo(models.skill, {
        foreignKey: 'skill_id',
      });
      models.skilltrend.belongsTo(models.year, {
        foreignKey: 'year_id',
      });
    }
  }
  skilltrend.init(
    {
      skill_id: DataTypes.INTEGER,
      year_id: DataTypes.INTEGER,
      demand: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'skilltrend',
    }
  );
  return skilltrend;
};
