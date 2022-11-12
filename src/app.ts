import express from 'express';
import guessesRouter from './routers/guesses.routers.js';

const server = express();
server.use(express.json());

server.use(guessesRouter);

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});