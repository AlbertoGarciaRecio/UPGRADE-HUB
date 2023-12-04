const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Crear un endpoint get que devuelva todas las películas.
router.get('/', async (req, res, next) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json(movies)
	} catch (err) {
		return next(error);
	}
});

// Crear un endpoint get que devuelva una película según su _id
router.get('/id/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const movie = await Movie.findById(id);
		if (movie) {
			return res.status(200).json(movie);
		} else {
			return res.status(404).json('No movie found by this id');
		}
	} catch (err) {
		return next(error);
	}
});

// Crear un endpoint get que devuelva un valor por su titulo.
router.get('/title/:title', async (req, res, next) => {
	const title = req.params.title;

	try {
		const movieByTitle = await Movie.find({ title });
		return res.status(200).json(movieByTitle);
	} catch (err) {
		return next(error);
	}
});

// Crear un endpoint get que devuelva los documentos según su género.
router.get('/genre/:genre', async (req, res, next) => {
	const genre = req.params.genre;

	try {
		const movieByGenre = await Movie.find({ genre });
		return res.status(200).json(movieByGenre);
	} catch (err) {
		return next(error);
	}
});

// Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010.
router.get('/year/:year', async (req, res, next) => {
	const year = req.params.year;

	try {
		const movieByYear = await Movie.find({ year: {$gt:year} });
		return res.status(200).json(movieByYear);
	} catch (err) {
		return next(error);
	}
});

// Crear un método post de Movies para crear una nueva película.

router.post('/create', async (req, res, next) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return next(error);
    }
});

// Crear un método put de Movies para modificar una película.

router.put('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const movieModify = new Movie(req.body) 
        movieModify._id = id 
        const movieUpdated = await Movie.findByIdAndUpdate(id , movieModify)
        return res.status(200).json(movieUpdated)
    } catch (error) {
        return next(error)
    }
});

// Crear un método delete de Movies para eliminar una película.

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const movieDeleted = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieDeleted);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;