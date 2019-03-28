const pollSession = require('../services/polls');


const getPolls = async (req, res) => {
    await pollSession.getAll()
        .then(data => {
            if (!data) {
                res.json({authenticated: "just don't have data"})
            } else {
                res.render('restricted');
            } 
        })
};

const getPollByID = async (req, res) => {
    const id = req.params.id;

    await pollSession.getById(id)
        .then(data => res.send(data));
};

const addPoll = async (req, res) => {
    pollSession.addPoll({
        name: req.body.title,
        topic: req.body.topic,
        duration: req.body.duration,
        userid: req.user.id
    })
        .then(data => res.send(data));
}

module.exports = {
    getPolls: getPolls,
    getPollByID: getPollByID,
    addPoll: addPoll
};