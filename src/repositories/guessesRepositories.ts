import { connection } from "../database/db.js";
import { QueryResult } from 'pg';
import { Games, Guesses } from "../protocols/Guesses.js";

async function listGuesses(): Promise<QueryResult<Games>>{
    return connection.query(`
    SELECT
    games.id,
    games."teamOne",
    games."teamTwo",
    games.type
    FROM games 
    WHERE status=true
    ORDER BY "createdAt" DESC;`);
}

async function dataGames(id: number): Promise<QueryResult<Games>>{
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

export {
    listGuesses, 
    dataGames,
    addGuesses
};