const Hotel = require("../models/hotelModel")
const Room = require("../models/hotelRoomModel")

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
        const Create = await Room.create(req.body)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: Create._id },
            });
        } catch (err) {
            next(err)
        }
        res.json(Create);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const updateRoom = async (req, res, next) => {
    try {
        const Update = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(Update);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const getRoom = async (req, res, next) => {
    try {
        const getroom = await Room.findById(req.params.id);
        res.json(getroom);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const getRooms = async (req, res, next) => {
    try {
        const getAllRooms = await Room.find({});
        res.json(getAllRooms);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
        await Room.findByIdAndRemove(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err)
        }
        res.json({ message: 'Room deleted successfully' });
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

module.exports = {
    createRoom,
    updateRoom,
    getRoom,
    getRooms,
    deleteRoom
}