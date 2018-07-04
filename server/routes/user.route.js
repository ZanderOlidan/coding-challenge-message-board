import { Router } from 'express';
import UserCtrl from '../controllers/user.controller';

const router = new Router();

router.get('/', (req, res, next) => {
    res.send('stuff');
})

router.get('/profile', (req, res, next) => {
    res.send(req.user);
})

router.get('/:id', (req,res) => {
    UserCtrl.getUser(req, res);
})

export default router;