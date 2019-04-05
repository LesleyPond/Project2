const authController = require('../controllers/auth');
const pollsController = require('../controllers/polls');
const authMiddleware = require('../middlewares/auth');


// Define routes for accessing various pages of the app.
//  Most routes will initiate a render of the relevant view
// Routes for polls and login will prompt authentications
module.exports = (app, io) => {

 global.polls = [];
global.votes = [];


  app.get('/', (req, res) => {
    res.render('home');
  });

    // user connected
    io.on('connection', (socket) => {
      console.log('new user connected');

      // socket.on('testpollidea', (poll) => {
      //   if (polls) {
      //   polls.push(poll);
      // }
      //   });

        socket.emit('test', 'hello');

      socket.on('vote', (vote) => {
        if (votes) {
        votes.push(vote);
        }
        console.log(votes);
      });

          // user disconnected
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });

//   // user connected
//   io.on('connection', (socket) => {
//     console.log('new user connected');

//     socket.on('createPoll', (poll) => {
//     console.log(`poll: ${JSON.stringify(poll)}`);
//     });


//     socket.on('vote', (vote) => {
//     console.log(`vote: ${JSON.stringify(vote)}`);
//     });


    // // user disconnected
    // socket.on('disconnect', () => {
    // console.log('user disconnected');
    // });
// });

  app.get('/landingpage', authMiddleware.checkAuth, (req, res) =>{
    res.render('landingpage');
  });
  app.get('/createPoll', (req, res) => {
    res.render('createPoll');
  });
  app.get('/pleaselogin', (req, res) => {
    res.render('pleaselogin');
  });

  app.get('/results/:id', (req, res) => {
<<<<<<< HEAD
    res.render('results');
=======
    res.render(`results`, {data: votes});
>>>>>>> 623d7d96dd8cc3712743aa28b348ce4653f2fbd5
  });
  app.post('/polls/:id', authMiddleware.checkAuth, pollsController.addPoll);
  app.get('/viewPolls/:id', authMiddleware.checkAuth, pollsController.getPolls);
  app.get('/votes/:sessionID', pollsController.getPollByID);
  app.put('/polls/update/:id',
      authMiddleware.checkAuth,
      pollsController.updatePoll);
  app.get('/login', (req, res) => {
    res.render('login');
  });
  app.post('/login', authController.login);
  app.post('/', authController.register);
  app.put('/passwordChange/:id',
      authMiddleware.checkAuth,
      authController.changePassword);

};

