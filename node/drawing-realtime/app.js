const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);


app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));



require('./src/socket')(io);

app.get('/', (req, res) => {
    res.json({
        message: `Hola`
    });
});

server.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
});