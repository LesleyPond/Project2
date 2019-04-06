const express = require('express');
const path = require('path');
require('dotenv').config();
const db= require('./models');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const server = require('./middlewares/sockets')(app).server;




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

require('./routes/api-routes')(app, io);

  // user connected
//   io.on('connection', (socket) => {
//     console.log('new user connected');

//     socket.on('createPoll', (poll) => {
//     console.log(`poll: ${JSON.stringify(poll)}`);
//     });


//     socket.on('vote', (vote) => {
//     console.log(`vote: ${JSON.stringify(vote)}`);
//     });


//     // user disconnected
//     socket.on('disconnect', () => {
//     console.log('user disconnected');
//     });
// });

db.sequelize.sync().then(function() {
  server.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;
