const db = require('../models');

const getAll = id => db.Poll.findAll({where: {UserId: id}});

const getById = (id, question) => db.Poll.findOne({where:{UserId : id, question:question}});

const addPoll = poll => db.Poll.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll
};