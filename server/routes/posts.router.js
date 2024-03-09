import { Router } from 'express';
import { posts, createPosts } from '../controllers/post.controller.js';

const router = Router();

router.get('/', posts)
router.post('/', createPosts)

export default router;