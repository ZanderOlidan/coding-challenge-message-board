import { Router } from 'express';
import AuthCtrl from '../controllers/auth.controller';

const router = new Router();

router.post('/register', (req,res) => {
    AuthCtrl.register(req, res);
})

router.post('/login', (req, res, next) => {
    AuthCtrl.login(req, res, next);
})

export default router;