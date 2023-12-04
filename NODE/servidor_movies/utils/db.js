require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            console.log("Conexion establecida.")
        
    } catch(error) {
            console.log("Error "+error)
    }
}

module.exports = {
    connect
};