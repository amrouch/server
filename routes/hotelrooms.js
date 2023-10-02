const express = require('express');
const hotelroomsController = require("../controllers/hotelroomsController")
const verify = require('../tokenVerif');

const router = express.Router();

//Create
router.post("/:hotelid", verify.verifyAdmin, hotelroomsController.createRoom);
//update
router.put("/:id", verify.verifyAdmin, hotelroomsController.updateRoom);
//Get
router.get('/:id', hotelroomsController.getRoom);
//Get All
router.get('/', hotelroomsController.getRooms);
//Delete
router.delete('/:id/:hotelid', verify.verifyAdmin, hotelroomsController.deleteRoom);


module.exports = router;