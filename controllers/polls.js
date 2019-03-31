const pollSession = require('../services/polls');


const getPolls = async (req, res) => {
    // let UserId = parseInt(req.params.id.replace(':',''));
    let UserId = 1;
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

const addPoll = async (req, res, next) => {
    let pollData;
    console.log(req.body);
    pollSession.addPoll(req.body)
        .then(data => {
            pollData = data;
        });
        res.redirect('/viewPolls', {data: pollData})
        next();
}

const loadHome = (req, res) => {
    res.render('home');
}

module.exports = {
    getPolls: getPolls,
    getPollByID: getPollByID,
    addPoll: addPoll,
    loadHome: loadHome
};