const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/register', async(req, res, next) => {
    try {
        passport.authenticate('register', (error, user) => {
            if (error) {
                return next(error);
            }
            req.logIn(user, (error) => {
                if (error) {
                    return next(error);
                }
                return res.status(200).json(user)
            });
        }) (req);
    } catch (error) {
        return res.status(500).json(error)
    }
});

router.post('/login', (req, res, next) => {
    try {
        passport.authenticate('login', (error, user) => {
            if (error) return next (error)
            req.logIn(user, (error) => {
                if (error) {
                    return next (error);
                }
                return res.status(200).json(user)
            });
        })(req);
    }
    catch (error) {
        return res.status(500).json(error)
    }
});

router.post('/logout', (req, res, next) => {
    try {
        if (req.user) {
            req.logout((err) => {
                if(err){
                    return next(err);
                }
                req.session.destroy(() => {
                    res.clearCookie('connect.sid');
                    return res.status(200).json('Hasta la próxima!!');
                });
            });
        } else {
            return res.sendStatus(304);
        }
    } 
    catch (error) {
        return res.status(500).json(error)
    }
});

module.exports = router;