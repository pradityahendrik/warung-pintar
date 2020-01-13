const knex = require('../configs/database');

exports.getMessage = async () => {
    const result = await knex.select().table('message');
    return result;
};

exports.postMessage = async (request) => {
    await knex.table('message').insert(request);
    return 'success';
};

module.exports = exports;