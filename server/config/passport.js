import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { Strategy as JWTStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

import User  from '../models/user';

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    }, User.authenticate()
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
    }, 
    (payload, done) => {
        return User.findById(payload.id, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        })
    }
))