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
    let question = req.params.question.replace(/\+/g,' ');
    question += '?';
   console.log("question:", question)
    await pollSession.getById(id, question)
        .then(data => 
            res.render('pollVote',{data:data}));
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