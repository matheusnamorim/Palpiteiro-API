import {Request, Response} from 'express';
import { Games, Guesses } from '../protocols/Guesses.js';
import * as guessesRepositories from '../repositories/guessesRepositories.js';
import { guessesSchemas } from '../schemas/guessesSchemas.js';

async function listGuesses(req: Request, res: Response){
    try {
        const guesses: Games[] = (await guessesRepositories.listGuesses()).rows;
        return res.status(200).send(guesses);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

function addGuesses(req: Request, res: Response){
    try {
        const newGuesses = req.body as Guesses;
        const { error } = guessesSchemas.validate(newGuesses, {abortEarly: false});
        if(error){
            res.status(404).send({
                message: error.details.map(value => value.message)
            });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export { listGuesses, addGuesses };