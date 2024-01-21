const express = require('express');
const {getRickyMorty, getOneRickYMorty, postRickYMorty} = require('../controllers/rickymorty.controller');
const rickymortyRoutes = express.Router();

rickymortyRoutes.get('/', getRickyMorty);
rickymortyRoutes.get('/:id', getOneRickYMorty);
rickymortyRoutes.post('/', postRickYMorty);

module.exports  = rickymortyRoutes;