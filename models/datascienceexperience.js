'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class datascienceexperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  datascienceexperience.init({
    range: DataTypes.STRING,
    number_of_vacancy: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'datascienceexperience',
  });
  return datascienceexperience;
};