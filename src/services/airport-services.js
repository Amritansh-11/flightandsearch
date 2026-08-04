const { AirportRepository } = require('../respository/index');

class AirportService {

    constructor() {
        this.airportrepository = new AirportRepository();
    }

    async createairport(data) {
        try {
            const airport = await this.airportrepository.createAirport(data);
            return airport;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async deleteairport(airport_id) {
        try {
            const response = await this.airportrepository.deleteAirport(airport_id);
            return response;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async updateairport(airport_id, data) {
        try {
            const airport = await this.airportrepository.updateAirport(airport_id, data);
            return airport;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getairport(airport_id) {
        try {
            const airport = await this.airportrepository.getAirport(airport_id);
            return airport;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAllairport(filter) {
        try {
            const airports = await this.airportrepository.getAllAirport({
                name: filter.name
            });
            return airports;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

}

module.exports = AirportService;