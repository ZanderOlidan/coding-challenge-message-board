import { Router} from 'express';
import AuthRouter from './auth.route';
import UserRouter from './user.route';
import MessageRouter from './message.route';

import passport from 'passport';

const router = new Router();
// For the secured route
router.use(
    '/messages', 
    passport.authenticate( 'jwt', { session:false }),
    MessageRouter
);

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

export default router