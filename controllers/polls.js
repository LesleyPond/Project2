const pollSession = require('../services/polls');


const getPolls =  (req, res) => {
UserId = req.params.id;
     pollSession.getAll(UserId)
        .then(data => {
            res.render('viewPolls', {data: data});
        })
};

const getPollByID = async (req, res) => {

    const sessionID = req.params.sessionID;

    await pollSession.getById(sessionID)
        .then(data => {
            res.send(data)
        });
};


const addPoll = async (req, res) => {
    pollSession.addPoll(req.body)
        .then(data => res.send(data));
}

module.exports = {
    getPolls: getPolls,
    getPollByID: getPollByID,
    addPoll: addPoll
};