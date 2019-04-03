const db = require('../models');


const getAll = (id) => db.Poll.findAll({where: {UserId: id}});


const getById = (sessionID) => db.Poll.findOne({where: {sessionID: sessionID}});

const updatePoll = (id, voteCast) => {
  switch (voteCast) {
    case 'option1Votes':
      return db.Poll.increment('option1Votes', {where: {sessionId: id}});
      break;
    case 'option2Votes':
      return db.Poll.increment('option2Votes', {where: {sessionId: id}});
      break;
    case 'option3Votes':
     return db.Poll.increment('option3Votes', {where: {sessionId: id}});
      break;
    case 'option4Votes':
     return db.Poll.increment('option4Votes', {where: {sessionId: id}});
      break;
    case 'option5Votes':
     return db.Poll.increment('option5Votes', {where: {sessionId: id}});
      break;
    case 'option6Votes':
     return db.Poll.increment('option6Votes', {where: {sessionId: id}});
      break;
    case 'option7Votes':
     return db.Poll.increment('option7Votes', {where: {sessionId: id}});
      break;
    case 'option8Votes':
     return db.Poll.increment('option8Votes', {where: {sessionId: id}});
      break;
    case 'option9Votes':
     return db.Poll.increment('option9Votes', {where: {sessionId: id}});
      break;
    case 'option10Votes':
      return db.Poll.increment('option10Votes', {where: {sessionId: id}});
      break;
    default:
      console.log('death...');
      break;
  }
};


const addPoll = (poll) => db.Poll.create(poll);


module.exports = {
  getAll: getAll,
  getById: getById,
  addPoll: addPoll,
  updatePoll: updatePoll,
};
