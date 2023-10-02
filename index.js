const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/hotelrooms');
const cookieParser = require('cookie-parser');

const app = express();

require('./db/db');

app.use(cookieParser());
app.use(express.json());
app.use(cors());


app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests')
});