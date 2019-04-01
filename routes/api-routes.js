const authController = require('../controllers/auth');
const pollsController = require('../controllers/polls');
const authMiddleware = require('../middlewares/auth');
const pollSession = require('../services/polls');

// Define routes for accessing various pages of the app. Most routes will initiate a render of the relevant view
// Routes for polls and login will prompt authentications
module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home');
    });


    app.get('/landingpage', authMiddleware.checkAuth, (req, res) =>{
        res.render('landingpage');
    });

    app.get('/createPoll', (req, res) => {
        res.render('createPoll');
    });
    app.get('/pleaselogin', (req, res) => {
        res.render('pleaselogin');
    });

    app.get('/results', (req, res) => {
        res.render('results');
    });
    
    app.post('/polls/:id', authMiddleware.checkAuth, pollsController.addPoll);
    app.get('/viewPolls/:id', pollsController.getPolls)
    app.get('/createPoll/:id/vote/:question', authMiddleware.checkAuth, pollsController.getPollByID)    
   
    app.get('/login', (req, res) => {
        res.render('login');
    });
    app.post('/login', authController.login);
    app.post('/', authController.register);

    
    

    // app.get('/restricted', (req, res) => {
    //     res.render('restricted');
    // });

    
    
};

