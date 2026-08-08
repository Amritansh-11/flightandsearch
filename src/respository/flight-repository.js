const { Flight, Airport, City } = require('../models');
const { Op } = require('sequelize');

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
async searchFlights(filter) {
    try {

        const whereClause = {};
        const includeClause = [];

        // -------------------------
        // DATE FILTER
        // -------------------------
        if (filter.date) {
            whereClause.departureTime = {
                [Op.between]: [
                    new Date(`${filter.date}T00:00:00`),
                    new Date(`${filter.date}T23:59:59`)
                ]
            };
        }

        // -------------------------
        // MIN PRICE
        // -------------------------
        if (filter.minPrice) {
            whereClause.price = {
                [Op.gte]: Number(filter.minPrice)
            };
        }

        // -------------------------
        // MAX PRICE
        // -------------------------
        if (filter.maxPrice) {
            whereClause.price = {
                ...whereClause.price,
                [Op.lte]: Number(filter.maxPrice)
            };
        }

        // -------------------------
        // AIRPLANE
        // -------------------------
        if (filter.airplaneId) {
            whereClause.airplaneId = Number(filter.airplaneId);
        }

        // -------------------------
        // DEPARTURE CITY
        // -------------------------
        if (filter.departureCity) {

            includeClause.push({
                model: Airport,
                as: 'departureAirport',
                required: true,

                include: [
                    {
                        model: City,
                        required: true,
                        where: {
                            name: filter.departureCity
                        }
                    }
                ]
            });
        }

        // -------------------------
        // ARRIVAL CITY
        // -------------------------
        if (filter.arrivalCity) {

            includeClause.push({
                model: Airport,
                as: 'arrivalAirport',
                required: true,

                include: [
                    {
                        model: City,
                        required: true,
                        where: {
                            name: filter.arrivalCity
                        }
                    }
                ]
            });
        }

        // -------------------------
        // SEARCH
        // -------------------------
        const flights = await Flight.findAll({
            where: whereClause,
            include: includeClause,
            order: [
                ['price', 'ASC']
            ]
        });

        return flights;

    } catch (error) {

        console.log("Something went wrong in repository");
        throw { error };

    }
}
    
    

    

    
    
    

    


    
    

    
    
    
    
    
    

    


    
    

    
    
    

    


    
    

    
    
    
    

    


    
    

    

    


    
    
    

    


    
    

    

    

    

    

    
    
    

    

    
    
    
    
    

    

    


    
    

    

    

    

    

    
    
    

    

    
    
    
    
    

    

    


    
    
    

    
    
    


    

    
    
    

    


    

    
    
    

    


    

    
    
    

    


    
    
    

    

    

    

    

    


    

    

    

    

    

    

}

module.exports = FlightRepository;