import {Request, Response} from 'express';
import { Games } from '../protocols/Guesses.js';
import * as guessesRepositories from '../repositories/guessesRepositories.js';

async function listGuesses(req: Request, res: Response){
    try {
        const guesses: Games[] = await (await guessesRepositories.listGuesses()).rows;
        return res.status(200).send(guesses);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export {listGuesses};