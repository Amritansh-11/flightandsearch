const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {

    async createAirport({ name, address, cityId }) {
        try {
            const airport = await Airport.create({
                name,
                address,
                cityId
            });
            return airport;
        }
        catch (error) {
            console.log("Something went wron on the repo layer");
            throw { error };
        }
    }

    async deleteAirport(airport_id) {
        try {
            await Airport.destroy({
                where: {
                    id: airport_id
                }
            });
            return true;
        }
        catch (error) {
            console.log("Something went wron on the repo layer");
            throw { error };
        }
    }

    async updateAirport(airport_id, data) {
        try {
            const result = await Airport.update(data, {
                where: {
                    id: airport_id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Something went wron on the repo layer");
            throw { error };
        }
    }

    async getAirport(airport_id) {
        try {
            const airport = await Airport.findByPk(airport_id);
            return airport;
        }
        catch (error) {
            console.log("Something went wron on the repo layer");
            throw { error };
        }
    }

    async getAllAirport(filter) {
        try {
            if (filter.name) {
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }

            const airports = await Airport.findAll();
            return airports;
        }
        catch (error) {
            console.log("Something went wron on the repo layer");
            throw { error };
        }
    }
    
}

module.exports = AirportRepository;