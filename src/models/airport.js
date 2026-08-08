'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
      // define association here
      
      static associate(models) {

  // Airport belongs to a City
  this.belongsTo(models.City, {
    foreignKey: 'cityId',
    onDelete: 'CASCADE'
  });

  // Flights departing from this airport
  this.hasMany(models.Flight, {
    foreignKey: 'departureAirportId',
    as: 'DepartingFlights'
  });

  // Flights arriving at this airport
  this.hasMany(models.Flight, {
    foreignKey: 'arrivalAirportId',
    as: 'ArrivingFlights'
  });

}
      
      
    
  }
  Airport.init({
    name: {type:DataTypes.STRING,
           allowNull:false
    },
    address: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};