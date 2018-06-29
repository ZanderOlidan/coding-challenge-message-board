import passport from 'passport';
import jwt from 'jsonwebtoken';

import User from '../models/user';

const register = async (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username
    });
    User.register(user, req.body.password, (err) => {
        if (err) return res.status(500).send(`Errorrr: ${err}`);

        console.log('User registered');
        res.redirect('/login');
        // const auth = passport.authenticate('local', {session: false});
        // auth(req, res, () => {
        //     res.status(200).send("Account created");
        // })
    })
}

const login = async(req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Incorrect input'
        })
    }


    passport.authenticate('local', {
        session: false,
        successRedirect: '/'
    }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: `Something's wrong. Error: ${err}`
            })
        }
        req.login(user, {session:false}, (err) => { // from the plugin
            if (err) res.send(err);

            const payload = {
                id: user.id,
                username: user.username
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            return res.status(200).json({user: user.username, token});
        })
    })(req,res);
}


export {
    register,
    login
}