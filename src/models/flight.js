'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      Flight.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId'
      });

      Flight.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport'
      });

      Flight.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport'
      });
    }
  }

  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airplanes',
        key: 'id'
      }
    },

    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airports',
        key: 'id'
      }
    },

    arrivalAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airports',
        key: 'id'
      }
    },

    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    },

    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },

    boardingGate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }

  }, {
    sequelize,
    modelName: 'Flight',
  });

  return Flight;
};