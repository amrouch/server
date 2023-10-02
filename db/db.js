const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbURL = process.env.MONGO;

mongoose.connect(dbURL)
    .then(() => {
        console.log('Connexion à la base de données établie avec succès.');
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à la base de données :', error);
    });

// mongoose.connection.on("disconnected", () => {
//     console.log("mongodb disconnected!")
// })
// mongoose.connection.on("connected", () => {
//     console.log("mongodb connected!")
// })

module.exports = mongoose;