import { connection } from "../../database/db.js";
import { QueryResult } from 'pg';
import { Games } from "../protocols/Guesses.js";

async function listGuesses(): Promise<QueryResult<Games>>{
    return connection.query(`
    SELECT
    games.id,
    games."teamOne",
    games."teamTwo" 
    FROM games 
    WHERE status=true
    ORDER BY "createdAt" DESC;`);
}

export {listGuesses}