const authController = require('../controllers/auth');
const pollsController = require('../controllers/polls');
const authMiddleware = require('../middlewares/auth');

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home');
    });


    app.get('/landingpage', authMiddleware.checkAuth, (req, res) =>{
        res.render('landingpage');
    });

    app.get('/createPoll', (req, res) => {
        res.render('createPoll');
    })



    app.get('/login', (req, res) => {
        res.render('login');
    });
    app.post('/login', authController.login);
    app.post('/', authController.register);

    app.get('/polls', authMiddleware.checkAuth, pollsController.getPolls);
    app.get('/polls/:session-id', pollsController.getPollByID);
    app.post('polls', authMiddleware.checkAuth, pollsController.addPoll);
};

