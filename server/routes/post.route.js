import { Router } from 'express';
import PostCtrl from '../controllers/post.controller';

const router = new Router();

router.get('/', (req, res) => {
    PostCtrl.index(req, res);
})

router.post('/create', (req, res) => {
    PostCtrl.create(req, res);
})

export default router