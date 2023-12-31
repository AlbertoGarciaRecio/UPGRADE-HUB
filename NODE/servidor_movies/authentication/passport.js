const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/User");

const saltRounds = 10;

passport.use(
    "register", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const previousUser = await User.findOne({email: email});
                if (previousUser) {
                    const error = new Error("Usuario registrado, introduzca otro email");
                    return done (error);
                }
                const pwdHash = await bcrypt.hash(password, saltRounds);
                const newUser = new User({
                    email: email,
                    password: pwdHash,
                });
                const savedUser = await newUser.save();
                done(null, savedUser);
            } catch (error) {
                return done (error);
            }
        }
    )
);

passport.use(
    "login", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                const currentUser = await User.findOne({email: email});
                if(!currentUser) {
                    const error = new Error("El usuario no existe");
                    return done (error);
                }
                const isValidPassword = await bcrypt.compare(
                    password, currentUser.password
                );
                if(!isValidPassword) {
                    const error = new Error("Contraseña no válida");
                    return done (error);
                }
                currentUser.password = null;
				return done (null, currentUser);
            }
            catch (error) {
                return done (error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    return done(null, user._id);
  });
  
passport.deserializeUser(async (userId, done) => {
    try {
        const existingUser = await User.findById(userId);
        return done(null, existingUser);
    } catch (error) {
        return done(error);
    }
});