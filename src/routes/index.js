const express = require('express');

const router = express.Router();

const cityRoutes = require('./v1/city-routes');
const airportRoutes = require('./v1/airport-routes');
const flightRoutes = require('./v1/flight-routes');

router.use('/v1/cities', cityRoutes);
router.use('/v1/airports', airportRoutes);
router.use('/v1/flights', flightRoutes);

module.exports = router;