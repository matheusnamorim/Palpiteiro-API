import express from 'express';
import { addGuesses, listGuesses } from '../controllers/guesses.controllers.js';
import { validateGuesses } from '../middlewares/guesses.middlewares.js';

const router = express.Router();

router.get('/guesses', listGuesses);
router.post('/guesses', validateGuesses, addGuesses);

export default router;