const express = require('express');

const AirportController = require('../../controllers/airport-controllers');

const router = express.Router();

router.post('/', AirportController.create);

router.get('/', AirportController.getAll);
router.get('/:id', AirportController.get);

router.patch('/:id', AirportController.update);
router.delete('/:id', AirportController.destroy);

module.exports = router;