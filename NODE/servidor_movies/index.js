const express = require("express");
const passport = require("passport");
require("./authentication/passport");
const {connect} = require('./utils/db');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const moviesRouter = require('./routes/movie.routes');
const cinemasRouter = require('./routes/cinema.routes');
const usersRouter = require('./routes/user.routes');

connect();

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(
    session({
        secret: 'upgradehub_node',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
        },
        store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        })
    })
);
server.use(passport.initialize());
server.use(passport.session());

server.use('/movies', moviesRouter);
server.use('/cinemas', cinemasRouter);
server.use('/users', usersRouter);

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
});