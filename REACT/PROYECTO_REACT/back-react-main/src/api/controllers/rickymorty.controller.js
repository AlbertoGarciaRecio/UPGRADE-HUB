const rickyMorty = require('../models/rickymorty.model');

const getRickyMorty = async (req, res) => {
    try {
        const allRickYMorty = await rickyMorty.find();
        return res.status(200).json(allRickYMorty);
    } catch (error) {
        return res.status(500).json(error)
    }
}


const getOneRickYMorty = async (req, res) => {
    try {
        const {id} =req.params;
        const oneRickYMorty = await rickyMorty.findById(id).populate('rickymorty');
        return res.status(200).json(oneRickYMorty);
    } catch (error) {
        return res.status(500).json(error)
    }
}


const postRickYMorty = async (req, res) => {
    try {
        const newRickYMorty = new rickyMorty(req.body);
        const createdRickYMorty = await newRickYMorty.save();
        return res.status(201).json(createdRickYMorty);
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {getRickyMorty, getOneRickYMorty, postRickYMorty};