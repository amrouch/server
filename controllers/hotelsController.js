const Hotel = require("../models/hotelModel")

const createHotel = async (req, res, next) => {
    try {
        const Create = await Hotel.create(req.body)
        res.json(Create);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const updateHotel = async (req, res, next) => {
    try {
        const Update = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(Update);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.json(getHotel);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const getHotels = async (req, res, next) => {
    try {
        const getAllHotels = await Hotel.find({});
        res.json(getAllHotels);
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}

const deletetHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndRemove(req.params.id)
        res.json({ message: 'Hotel deleted successfully' });
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Internal server error' });
        next(err);
    }
}
module.exports = {
    createHotel,
    updateHotel,
    getHotel,
    getHotels,
    deletetHotel
}