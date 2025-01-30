import express from 'express';
import { createSubscribe } from '../controllers/subscribeController.js';
const router = express.Router();

// Create a new subscribe
router.post('/create', createSubscribe);

export default router;