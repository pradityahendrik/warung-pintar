var express = require('express');
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

module.exports = router;