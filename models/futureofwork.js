'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class futureofwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  futureofwork.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    source: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'futureofwork',
  });
  return futureofwork;
};