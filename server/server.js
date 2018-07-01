import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';

import './config/env';
import './config/db';
import './config/passport';

import AuthRouter from './routes/auth.route';
import UserRouter from './routes/user.route';
import PostRouter from './routes/post.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(
    '/messages', 
    passport.authenticate( 'jwt', { session:false }),
    PostRouter
);


// app.post('/register', (req,res) => {
//     authController.register(req, res);
// })

// app.post('/login', (req, res, next) => {
//     authController.login(req,res, next);
// })

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})