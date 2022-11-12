import express from 'express';

const server = express();
server.use(express.json());

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});