const db = require('../models');
const Sequelize = require("Sequelize")

const getAll = id => db.Poll.findAll({where: {UserId: id}});


const getById = sessionID => db.Poll.findOne({where: {sessionID: sessionID}});

const updatePoll = (id, voteCast) => {
    switch (voteCast) {
     case 'option1Votes':
        db.Poll.increment('option1Votes', { where: { UserId: id }});
        break;
     case 'option2Votes' :
        db.Poll.increment('option2Votes', { where: { UserId: id }});
        break;
     case 'option3Votes' :
        db.Poll.increment('option3Votes', { where: { UserId: id }});
        break;
     case 'option4Votes' :
        db.Poll.increment('option4Votes', { where: { UserId: id }});
        break;
     case 'option5Votes' :
        db.Poll.increment('option5Votes', { where: { UserId: id }});
        break;
     case 'option6Votes' :
        db.Poll.increment('option6Votes', { where: { UserId: id }});
        break;
     case 'option7Votes' :
        db.Poll.increment('option7Votes', { where: { UserId: id }});
        break;
     case 'option8Votes' :
        db.Poll.increment('option8Votes', { where: { UserId: id }});
        break;
     case 'option9Votes' :
        db.Poll.increment('option9Votes', { where: { UserId: id }});
        break;
     case 'option10Votes' :
        db.Poll.increment('option10Votes', { where: { UserId: id }});
        break;
    }



}


const addPoll = poll => db.Poll.create(poll);

module.exports = {
    getAll: getAll,
    getById: getById,
    addPoll: addPoll,
    updatePoll: updatePoll
};