const db = require('../models');

const getAll = () => db.Poll.findAll();

const getById = id => db.Poll.findById(id);

const addPoll = poll => db.Poll.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll
};