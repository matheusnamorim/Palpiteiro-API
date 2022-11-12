import express from 'express';
import { addGuesses, listGuesses } from '../controllers/guesses.controllers.js';

const router = express.Router();

router.get('/guesses', listGuesses);
router.post('/guesses', addGuesses);

export default router;