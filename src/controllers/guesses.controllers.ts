import {Request, Response} from 'express';
import { Games, Guesses } from '../protocols/Guesses.js';
import * as guessesRepositories from '../repositories/guessesRepositories.js';

async function listGames(req: Request, res: Response){
    try {
        const games: Games[] = (await guessesRepositories.listGames()).rows;
        return res.status(200).send(games);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function listGuesses(req: Request, res: Response){
    try {
        const guesses: Guesses[] = (await guessesRepositories.listGuesses()).rows;
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

function updateGames(req: Request, res: Response){  
    const id: number = res.locals.body.id;
    const winner: string = res.locals.body.winner;

    try {
        guessesRepositories.updateGames(id, winner);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function listGuessByName(req: Request, res: Response){
    const name: string = req.params.name;
    try {
        const dataGuesses: Guesses[] = (await guessesRepositories.getByName(name)).rows;
        if(dataGuesses.length !== 0) return res.status(200).send(dataGuesses);
        else return res.status(404).send('This name does not exist!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export { 
    listGames, 
    addGuesses, 
    removeGuesses, 
    updateGames,
    listGuesses,
    listGuessByName
};