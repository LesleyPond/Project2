const db = require('../models');
const Sequelize = require("Sequelize")

const getAll = id => db.Poll.findAll({where: {UserId: id}});


const getById = sessionID => db.Poll.findOne({where: {sessionID: sessionID}});

const updatePoll = (sessionID, voteCast) => {
    switch (voteCast) {
     case 'option1Votes':
        db.Poll.increment('option1Votes', { where: { sessionID: sessionID }});
        break;
     case 'option2Votes' :
        db.Poll.increment('option2Votes', { where: { sessionID: sessionID }});
        break;
     case 'option3Votes' :
        db.Poll.increment('option3Votes', { where: { sessionID: sessionID }});
        break;
     case 'option4Votes' :
        db.Poll.increment('option4Votes', { where: { sessionID: sessionID }});
        break;
     case 'option5Votes' :
        db.Poll.increment('option5Votes', { where: { sessionID: sessionID }});
        break;
     case 'option6Votes' :
        db.Poll.increment('option6Votes', { where: { sessionID: sessionID }});
        break;
     case 'option7Votes' :
        db.Poll.increment('option7Votes', { where: { sessionID: sessionID }});
        break;
     case 'option8Votes' :
        db.Poll.increment('option8Votes', { where: { sessionID: sessionID }});
        break;
     case 'option9Votes' :
        db.Poll.increment('option9Votes', { where: { sessionID: sessionID }});
        break;
     case 'option10Votes' :
        db.Poll.increment('option10Votes', { where: { sessionID: sessionID }});
        break;
      default:
         console.log('not a valid option');
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