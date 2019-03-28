module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/landingpage', (req, res) =>{
        res.render('landingpage');
    });

    app.get('/createPoll', (req, res) => {
        res.render('createPoll');
    })
    app.get('/viewPolls', (req, res) => {
        res.render('viewPolls');
    })
};
