const repo = require('../repositories/message');

exports.getMessage = async () => {
    const result = await repo.getMessage();
    return result;
};

exports.postMessage = async (request) => {
    const result = await repo.postMessage(request);
    return result;
};

module.exports = exports;