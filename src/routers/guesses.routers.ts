import express from 'express';
import { addGuesses, listGuesses, removeGuesses } from '../controllers/guesses.controllers.js';
import { validateGuesses, validateGuessesById } from '../middlewares/guesses.middlewares.js';

const router = express.Router();

router.get('/guesses', listGuesses);
router.post('/guesses', validateGuesses, addGuesses);
router.delete('/guesses/:id', validateGuessesById, removeGuesses);

export default router;