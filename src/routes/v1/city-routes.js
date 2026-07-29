const express = require('express');

const CityController = require('../../controllers/city-controllers');

const router = express.Router();

router.post('/', CityController.create);

router.post('/bulk', CityController.createMultiple);

router.get('/:id/airports', CityController.getAirports);

router.get('/', CityController.getAll);


router.get('/:id', CityController.get);

router.patch('/:id', CityController.update);
router.delete('/:id', CityController.destroy);

module.exports = router;