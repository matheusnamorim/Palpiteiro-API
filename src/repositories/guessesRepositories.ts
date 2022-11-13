import { connection } from "../database/db.js";
import { QueryResult } from 'pg';
import { Games, Guesses } from "../protocols/Guesses.js";

async function listGames(): Promise<QueryResult<Games>>{
    return connection.query(`
        SELECT
        games.id,
        games."teamOne",
        games."teamTwo",
        games.type
        FROM games 
        WHERE status=true
        ORDER BY "createdAt" DESC;
    `);
}

async function listGuesses(): Promise<QueryResult<Guesses>>{
    return connection.query(`
        SELECT 
        guesses."id" AS "guessesId",
        guesses."name", 
        guesses."scoreboardTeamOne",
        guesses."scoreboardTeamTwo",
        guesses."winnerTeam",
        guesses."gamesId",
        games."teamOne",
        games."teamTwo",
        games."type"
        FROM guesses 
        JOIN games ON guesses."gamesId"=games.id
        WHERE games.status = true
        ORDER BY guesses."createdAt" DESC;
    `);
};

async function dataGames(id: string | number): Promise<QueryResult<Games>>{
    return connection.query(`
        SELECT * FROM games WHERE id = $1;
    `, [id]);
}

function addGuesses(guesses: Guesses){
    connection.query(`
        INSERT INTO guesses ("name", "scoreboardTeamOne", "scoreboardTeamTwo", "winnerTeam", "gamesId") 
        VALUES ($1, $2, $3, $4, $5);
    `, [guesses.name, guesses.scoreboardTeamOne, guesses.scoreboardTeamTwo, guesses.winnerTeam, guesses.gamesId]);
};

async function guessesById(id: string): Promise<QueryResult<Guesses>>{
    return connection.query(`
        SELECT 
        guesses.id AS "guessesId",
        guesses.name, 
        guesses."scoreboardTeamOne",
        guesses."scoreboardTeamTwo",
        guesses."winnerTeam",
        guesses."gamesId",
        games."teamOne",
        games."teamTwo",
        games."type",
        games."status"
        FROM guesses 
        JOIN games ON guesses."gamesId"=games.id
        WHERE guesses.id = $1
    `, [id]);
};

function deleteGuesses(id: number){
    connection.query(`
        DELETE FROM guesses WHERE id = $1;
    `, [id]);
};

async function gamesById(id: string): Promise<QueryResult<Games>>{
    return connection.query(`
        SELECT * FROM games WHERE id = $1;
    `, [id]);
};

function updateGames(id: number, winner: string){
    connection.query(`
        UPDATE games SET "status" = $1, "winner" = $2 WHERE id = $3;    
    `, [false, winner, id]);
}

async function getByName(name: string){
    return connection.query(`
        SELECT * FROM guesses WHERE name = $1;
    `, [name]);
};

export {
    listGames, 
    dataGames,
    addGuesses,
    guessesById,
    deleteGuesses,
    updateGames,
    gamesById,
    listGuesses,
    getByName
};