'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.skill.hasMany(models.skilltrend, {
        foreignKey: 'skill_id',
      });
    }
  }
  skill.init(
    {
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'skill',
    }
  );
  return skill;
};
