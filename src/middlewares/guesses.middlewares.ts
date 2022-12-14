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
        if(dataGuesses[0].status === false) return res.status(409).send('This guess has been closed!');
        if(dataGuesses[0].teamOne !== newGuesses.winnerTeam && dataGuesses[0].teamTwo !== newGuesses.winnerTeam && newGuesses.winnerTeam !== 'Empate'){
            return res.status(404).send("This team not exist in the guesses!");
        }

        if(newGuesses.winnerTeam === dataGuesses[0].teamOne){
            if(newGuesses.scoreboardTeamOne <= newGuesses.scoreboardTeamTwo) return res.status(422).send('Score does not match the winner!');
        }else if(newGuesses.winnerTeam === dataGuesses[0].teamTwo){
            if(newGuesses.scoreboardTeamTwo <= newGuesses.scoreboardTeamOne) return res.status(422).send('Score does not match the winner!');
        }else if(newGuesses.winnerTeam === 'Empate'){
            if(newGuesses.scoreboardTeamOne !== newGuesses.scoreboardTeamTwo) return res.status(422).send('Score does not match the winner!');
        }

        if((newGuesses.scoreboardTeamOne >= 0 && newGuesses.scoreboardTeamTwo >= 0) || 
        (newGuesses.scoreboardTeamOne === undefined && newGuesses.scoreboardTeamTwo === undefined)) next();
        else return res.status(422).send('Report the score of the two teams!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function validateGuessesById(req: Request, res: Response, next: NextFunction){
    try {
        const id: string = req.params.id;

        const dataGuesses: Guesses[] = (await guessesRepositories.guessesById(id)).rows;
        if(dataGuesses.length === 0) return res.status(404).send('There is id not exists!');

        res.locals.id = id;
        next();
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function validadeGames(req: Request, res: Response, next: NextFunction){
    try {
        const id: string = req.params.id;
        const winner: string = req.body.winner;

        const dataGames: Games[] = (await guessesRepositories.gamesById(id)).rows;
        if(dataGames.length === 0) return res.status(404).send('There is id not exists!');
        if(dataGames[0].status === false) return res.status(409).send('This guesses is already closed!');
        if(winner !== dataGames[0].teamOne && winner !== dataGames[0].teamTwo && winner !== 'Empate'){
            return res.status(422).send('This game does not accept this winner!');
        }

        res.locals.body = {id, winner};
        next();
    } catch (error) {
        return res.status(500).send(error.message); 
    }
};

export {
    validateGuesses,
    validateGuessesById,
    validadeGames
};