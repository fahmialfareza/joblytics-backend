'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class datasciencerole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  datasciencerole.init({
    role: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'datasciencerole',
  });
  return datasciencerole;
};