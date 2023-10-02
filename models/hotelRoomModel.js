const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    peoplenumber: {
        type: Number,
        required: true
    },
    roomnumbers: [{
        number: Number,
        unavailabledates: {
            type: [Date]
        }
    }]
    ,
},
    { timestamps: true }
);

const Room = mongoose.model('Rooms', RoomSchema);

module.exports = Room;