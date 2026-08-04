const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createcity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deletecity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getcity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the city", // Fixed message
      err: error
    });
  }
};

const update = async (req, res) => {
  try {
    // Fixed: Pass req.body so data can actually update
    const response = await cityService.updatecity(req.params.id, req.body); 
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city", // Fixed message
      err: error
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllcity(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Fetched all cities successfully",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch cities", // Fixed message
      err: error
    });
  }
  
};
const createMultiple = async (req, res) => {
  try {
    const cities = await cityService.createMultipleCities(req.body);

    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created cities",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create cities",
      err: error
    });
  }
};
const getAirports = async (req, res) => {
    try {
        const city = await cityService.getAirportsByCity(req.params.id);

        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched all airports of the city",
            err: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch airports",
            err: error
        });
    }
};

module.exports = {
    create,
    createMultiple,
    destroy,
    get,
    update,
    getAll,
    getAirports
};














































































































































































































































































































































































































































































































