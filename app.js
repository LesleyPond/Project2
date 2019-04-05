const express = require('express');
const path = require('path');
require('dotenv').config();
const db= require('./models');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = socketIO(server);

// user connected
io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('vote', (vote) => {
    console.log(`vote: ${JSON.stringify(vote)}`);
  });

  // user disconnected
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

require('./routes/api-routes')(app);


db.sequelize.sync({force: true}).then(function() {
  server.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;
