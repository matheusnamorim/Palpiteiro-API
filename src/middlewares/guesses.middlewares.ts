import {Request, Response, NextFunction} from 'express';
import { Games, Guesses } from '../protocols/Guesses';
import { guessesSchemas } from '../schemas/guessesSchemas.js';
import * as guessesRepositories from '../repositories/guessesRepositories.js';

async function validateGuesses(req: Request, res: Response, next: NextFunction){
    try {
        const newGuesses = req.body as Guesses;
        const { error } = guessesSchemas.validate(newGuesses, {abortEarly: false});
        if(error){
            res.status(404).send({
                message: error.details.map(value => value.message)
            });
        }
        const dataGuesses: Games[] = (await guessesRepositories.dataGames(newGuesses.gamesId)).rows;
        if(dataGuesses.length === 0) return res.status(404).send("This game not exist!");
        if(dataGuesses[0].teamOne !== newGuesses.winnerTeam && dataGuesses[0].teamTwo !== newGuesses.winnerTeam){
            return res.status(404).send("This team not exist in the guesses!");
        }   
        if(newGuesses.scoreboardTeamOne && newGuesses.scoreboardTeamTwo) next();
        else return res.status(422).send('Report the score of the two teams!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export {
    validateGuesses
};