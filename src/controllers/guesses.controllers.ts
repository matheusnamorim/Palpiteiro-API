import {Request, Response} from 'express';
import { Games, Guesses } from '../protocols/Guesses.js';
import * as guessesRepositories from '../repositories/guessesRepositories.js';

async function listGuesses(req: Request, res: Response){
    try {
        const guesses: Games[] = (await guessesRepositories.listGuesses()).rows;
        return res.status(200).send(guesses);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

function addGuesses(req: Request, res: Response){
    const newGuesses = req.body as Guesses;
    try {
        guessesRepositories.addGuesses(newGuesses);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

function removeGuesses(req: Request, res: Response){
    const id: number = res.locals.id;
    try {
        guessesRepositories.deleteGuesses(id);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export { listGuesses, addGuesses, removeGuesses };