const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);

        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created a Flight",
            err: {}
        });

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create Flight",
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {

        const response = await flightService.deleteFlight(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted Flight",
            err: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete Flight",
            err: error
        });

    }
};
const searchFlights = async (req, res) => {
    try {

        const flights = await flightService.searchFlights(req.query);

        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully searched Flights",
            err: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to search Flights",
            err: error
        });

    }
};

const get = async (req, res) => {

    try {

        const response = await flightService.getFlight(req.params.id);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched Flight",
            err: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch Flight",
            err: error
        });

    }

};

const update = async (req, res) => {

    try {

        const response = await flightService.updateFlight(req.params.id, req.body);

        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated Flight",
            err: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update Flight",
            err: error
        });

    }

};

const getAll = async (req, res) => {

    try {

        const flights = await flightService.getAllFlights();

        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully fetched all Flights",
            err: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch Flights",
            err: error
        });

    }

};

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    searchFlights
};