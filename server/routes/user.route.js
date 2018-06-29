import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
    res.send('stuff');
})

router.get('/profile', (req, res, next) => {
    res.send(req.user);
})

export default router;