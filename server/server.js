import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';

import './config/env';
import './config/db';
import './config/passport';

import APIRouter from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', APIRouter);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})