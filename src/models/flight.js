'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {

    static associate(models) {

      // Flight belongs to an Airplane
      Flight.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // Departure Airport
      Flight.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      // Arrival Airport
      Flight.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
      },
      validate: {
        notSameAirport(value) {
          if (value === this.departureAirportId) {
            throw new Error(
              "Departure Airport and Arrival Airport cannot be the same."
            );
          }
        }
      }
    },

    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },

    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        arrivalAfterDeparture(value) {
          if (new Date(value) <= new Date(this.departureTime)) {
            throw new Error(
              "Arrival time must be after departure time."
            );
          }
        }
      }
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
    modelName: 'Flight'
  });

  return Flight;
};