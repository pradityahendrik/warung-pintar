var express = require('express');
var router = express.Router();
const method = require('../methods/message');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

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
    io.on('connection', function(){
        console.log('connect');
    });
    res.sendFile(process.cwd() + '/views/index.html');
});

module.exports = router;