const express = require('express');
const HotelController = require('../controllers/hotelsController');
const verify = require('../tokenVerif');

const router = express.Router();

//Create
router.post("/", verify.verifyAdmin, HotelController.createHotel);
//update
router.put("/:id", verify.verifyAdmin, HotelController.updateHotel);
//Get
router.get('/:id', HotelController.getHotel);
//Get All
router.get('/', HotelController.getHotels);
//Delete
router.delete('/:id', verify.verifyAdmin, HotelController.deletetHotel);

module.exports = router;