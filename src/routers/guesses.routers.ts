import express from 'express';
import { addGuesses, listGames, listGuessByName, listGuesses, removeGuesses, updateGames } from '../controllers/guesses.controllers.js';
import { validadeGames, validateGuesses, validateGuessesById } from '../middlewares/guesses.middlewares.js';

const router = express.Router();

router.get('/games', listGames);
router.get('/guesses', listGuesses);
router.get('/guesses/:name', listGuessByName);
router.post('/guesses', validateGuesses, addGuesses);
router.delete('/guesses/:id', validateGuessesById, removeGuesses);
router.put('/games/:id', validadeGames, updateGames);

export default router;