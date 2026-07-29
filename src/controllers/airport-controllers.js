const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createairport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create an airport",
      err: error
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteairport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted an airport",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airport",
      err: error
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.getairport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched an airport",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airport",
      err: error
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.updateairport(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated an airport",
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airport",
      err: error
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airports = await airportService.getAllairport(req.query);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "Fetched all airports successfully",
      err: {}
    });
  } catch (error) {
    console.log(error);
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
  destroy,
  get,
  update,
  getAll
};