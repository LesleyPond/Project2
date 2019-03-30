const pollSession = require('../services/polls');


const getPolls = async (req, res) => {
    let UserId = parseInt(req.params.id.replace(':',''));
    console.log(`this is the userid ${UserId}`);
    await pollSession.getAll(UserId)
        .then(data => {
            if (!data) {
                res.json({authenticated: "just don't have data"})
            } else {
               res.render('viewPolls.ejs', {data:data});
            } 
            
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