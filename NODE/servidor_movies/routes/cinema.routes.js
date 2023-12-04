const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');


// Método GET: Devuelve todo el listado
router.get('/', async (req, res, next) => {
    try {
        const cinemas = await Cinema.find().populate('movies');
        return res.status(200).json(cinemas);
    } catch (err) {
        return next(error);
    }
});

// Método POST: Inserta elemento
router.post('/create', async (req, res, next) => {
    try{
        const newCinema = new Cinema({
            name: req.body.name,
            location: req.body.location,
            movies: []
        });
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    }catch(error){
        return next(error)
    }
});

// Método PUT: Añade elemento
router.put('/:id/add-movies', async (req, res, next) => {
    try {
        const cinemaId = req.params.id;
        const movieIds = req.body.movieIds;
        console.log(movieIds);
        const updatedCinema = await Cinema.findByIdAndUpdate(
            cinemaId,
            { $push: { movies: {$each: movieIds} } },
            { new: true }
        );
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return next(error);
    }
});

// Método DELETE: Borra elemento
router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const cinemaDeleted = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(cinemaDeleted);
    }catch(error){
        return next(error)
    }
});

module.exports = router;