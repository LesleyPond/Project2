const db = require('../models');

const getAll = () => db.Polls.findAll();

const getById = id => db.Polls.findById(id);

const addPoll = poll => db.Polls.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll
};