const pollSession = require('../services/polls');


const getPolls = (req, res) => {
  UserId = req.params.id;
  pollSession.getAll(UserId)
      .then((data) => {
        res.render('viewPolls', {data: data});
      });
};

const getPollByID = async (req, res) => {
  const sessionID = req.params.sessionID;

  await pollSession.getById(sessionID)
      .then((data) => {
        res.render('pollVote', {data: data});
      });
};

const updatePoll = async (req, res) => {
  const id = req.body.UserId;
  const voteCast = req.body.voteCast;
  await pollSession.updatePoll(id, voteCast);
};
const addPoll = async (req, res) => {
  pollSession.addPoll(req.body)
      .then((data) => res.send(data));
};
module.exports = {
  getPolls: getPolls,
  getPollByID: getPollByID,
  addPoll: addPoll,
  updatePoll: updatePoll,
};
