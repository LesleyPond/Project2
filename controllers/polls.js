const pollSession = require('../services/polls');


const getPolls =  (req, res) => {
UserId = req.params.id;
console.log("user id on server side: " , UserId)
     pollSession.getAll(UserId)
        .then(data => {
            console.log(data)
            res.render('viewPolls', {data: data})
        })
};

const getPollByID = async (req, res) => {
    const id = req.params.id;

    await pollSession.getById(id)
        .then(data => res.send(data));
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