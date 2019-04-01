const db = require('../models');

const getAll = id => db.Poll.findAll({where: {UserId: id}});

const getById = sessionID => db.Poll.findOne({where: {sessionID: sessionID}});

const addPoll = poll => db.Poll.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll
};