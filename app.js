const express = require("express");
const ejs = require("ejs");
const path = require('path');
require("dotenv").config();
const db= require("./models")
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

require('./routes/api-routes')(app);



db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
    })
  })