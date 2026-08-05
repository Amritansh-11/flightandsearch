const { Flight } = require('../models/index');

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong on the repo layer");
            throw { error };
        }
    }

    async deleteFlight(flight_id) {
        try {
            await Flight.destroy({
                where: {
                    id: flight_id
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on the repo layer");
            throw { error };
        }
    }

    async updateFlight(flight_id, data) {
        try {
            const response = await Flight.update(data, {
                where: {
                    id: flight_id
                }
            });

            return response;
        } catch (error) {
            console.log("Something went wrong on the repo layer");
            throw { error };
        }
    }

    async getFlight(flight_id) {
        try {
            const flight = await Flight.findByPk(flight_id);
            return flight;
        } catch (error) {
            console.log("Something went wrong on the repo layer");
            throw { error };
        }
    }

    async getAllFlights() {
        try {
            const flights = await Flight.findAll();
            return flights;
        } catch (error) {
            console.log("Something went wrong on the repo layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;