const express = require('express');

const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/flight', FlightController.create);

router.delete('/flight/:id', FlightController.destroy);

router.get('/flight/:id', FlightController.get);

router.patch('/flight/:id', FlightController.update);

router.get('/flight', FlightController.getAll);

router.get('/search', FlightController.searchFlights);

module.exports = router;