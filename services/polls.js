const db = require('../models');

const getAll = id => db.Poll.findAll({where: {UserId: id}});

const getById = id => db.Poll.findById(id);

const addPoll = poll => db.Poll.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll
};