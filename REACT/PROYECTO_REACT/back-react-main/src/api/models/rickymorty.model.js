const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rickyMortySchema = new Schema(
    {
        name: {type: String, required: true},
        status: {type: String, required: false},
        species: {type: String, required: false},
        type: {type: String, required: false},
        gender: {type: String, required: true},
        origin: {type: String, required: true},
        image: {type: String, required: false},
    },{
        timestamps: true,
    }
)

const rickyMorty = mongoose.model('rickymorty', rickyMortySchema);
module.exports = rickyMorty;