import express from 'express';
import { listGuesses } from '../controllers/guesses.controllers.js';

const router = express.Router();

router.get('/guesses', listGuesses);

export default router;