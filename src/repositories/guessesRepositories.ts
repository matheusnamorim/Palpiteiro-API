import { connection } from "../database/db.js";
import { QueryResult } from 'pg';
import { Games } from "../protocols/Guesses.js";

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

async function dataGames(id): Promise<QueryResult<Games>>{
    return connection.query(`
        SELECT * FROM games WHERE id = $1;
    `, [id]);
}

export {
    listGuesses, 
    dataGames
};