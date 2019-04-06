const pollSession = require('../services/polls');
let sessionID = '';


const getPolls = (req, res) => {
  UserId = req.params.id;
  pollSession.getAll(UserId)
      .then((data) => {
        res.render('viewPolls', {data: data});
      });
};

const getPollByID = async (req, res) => {
  sessionID = req.params.sessionID;
  
  await pollSession.getById(sessionID)
      .then((data) => {
        return res.render('pollVote', {data: data});
      });
};
const getPollByID2 = async (req, res) => {
  sessionID = req.params.sessionID;
  
  await pollSession.getById(sessionID)
      .then((data) => {
        console.log("data:", data);
        return res.render('results', {data: data});
      });
};

const updatePoll = async (req, res) => {
  const voteCast = req.body.voteCast;
  console.log("vote cast:", voteCast);
  const currentUserId = req.body.UserId;
  console.log("currentUser Id :", currentUserId);
  const question = req.body.question;
  console.log("question:", question)
  await pollSession.updatePoll(currentUserId, question, voteCast)
      .then((data) => {
        res.send(sessionID);
      });
};

const addPoll = async (req, res) => {
  pollSession.addPoll(req.body)
      .then((data) => res.send(data));
};
module.exports = {
  getPolls: getPolls,
  getPollByID: getPollByID,
  addPoll: addPoll,
  getPollByID2: getPollByID2,
  updatePoll: updatePoll,
};
