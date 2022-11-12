import express from 'express';
var server = express();
server.use(express.json());
server.listen(5000, function () {
    console.log("Server is listening on port 5000");
});
