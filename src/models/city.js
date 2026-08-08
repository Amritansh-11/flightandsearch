'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Airport,{
        foreignKey:'cityId',
        onDelete:'CASCADE'
      });
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // 👈 Keep it here inside 'name'
      unique:true
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};