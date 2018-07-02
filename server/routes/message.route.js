import { Router } from 'express';
import MessageCtrl from '../controllers/message.controller';

const router = new Router();

router.get('/', (req, res) => {
    MessageCtrl.index(req, res);
})

// Create a new post
router.post('/', (req, res) => {
    MessageCtrl.create(req, res);
})

// Get a single entry of post
router.get('/:messageId', (req, res) => {
    MessageCtrl.single_get(req, res);
})

// Vote a single post
router.post('/:messageId/votes', (req,res) => {
    MessageCtrl.vote_post(req, res);
})

// Get total votes (calculated from difference of ups vs downs)
router.get('/:messageId/votes', (req,res) => {
    MessageCtrl.votes_get(req, res);
})

router.delete('/:messageId/votes', (req,res) => {
    MessageCtrl.votes_delete(req, res);
})


export default router