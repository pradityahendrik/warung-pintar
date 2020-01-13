var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var router = express.Router();
const method = require('../methods/message');

router.get('/', async (req, res, next) => {
    const result = await method.getMessage(req);
    res.send(result)
});

router.post('/', async (req, res, next) => {
    const result = await method.postMessage(req.body);
    res.send({
        result
    })
});

router.get('/real-time', async (req, res, next) => {
    io.on('connection', function(socket){
        console.log('a user connected');
    });
    res.sendFile(process.cwd() + '/views/index.html');
});

module.exports = router;