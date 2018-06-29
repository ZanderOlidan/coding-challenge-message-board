import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';

import './config/env';
import './config/db';
import './config/passport';
import * as authController from './controllers/auth.controller';

import user from './routes/user.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', passport.authenticate('jwt',{session:false}), (req, res) => {
    res.send("Hello world");
})

app.post('/register', (req,res) => {
    authController.register(req, res);
})

app.post('/login', (req, res, next) => {
    authController.login(req,res, next);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})