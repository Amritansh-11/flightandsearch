const { FlightRepository } = require('../respository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            const flight = await this.flightRepository.createFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async deleteFlight(id) {
        try {
            const response = await this.flightRepository.deleteFlight(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async updateFlight(id, data) {
        try {
            const response = await this.flightRepository.updateFlight(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getFlight(id) {
        try {
            const response = await this.flightRepository.getFlight(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAllFlights() {
        try {
            const response = await this.flightRepository.getAllFlights();
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;