import passport from 'passport';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import User from '../models/user';


let AuthCtrl = {}
AuthCtrl.register = async (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let username = req.body.username;

    if (!firstName || !validator.isAlpha(firstName)) {
        return res.status(422).send("First name cannot include numbers or be empty");
    }

    if (!validator.isAlpha(lastName)) {
        return res.status(422).send("Last name cannot include numbers");
    }

    if (!username || !validator.isAscii(username)) {
        return res.status(422).send("Username cannot be empty or have weird characters.");
    }

    let user = new User({
        firstName,
        lastName,
        username
    });
    await User.register(user, req.body.password, (err) => {
        if (err) return res.status(500).send(`Errorrr: ${err}`);

        console.log('User registered');
        // res.redirect('/login');
        const auth = passport.authenticate('local', {session: false});
        auth(req, res, () => {
            res.status(200).send("Account created");
        })
    })
}

AuthCtrl.login = async(req, res, next) => {
    console.log(req.body)
    if (!req.body.username || !req.body.password) {
        return res.status(401).json({
            message: 'Incorrect input',
        })
    }

    await passport.authenticate('local', {
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
            return res.status(200).json({
                _id: user._id,
                token
            });
        })
    })(req,res);
}


export default AuthCtrl;