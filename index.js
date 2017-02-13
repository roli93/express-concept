var express = require('express');

var app = express();
var mongoose = require('mongoose');

var User = require('./model/user.js')

mongoose.connect('mongodb://127.0.0.1:27017');

mongoose.Promise = Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected!');

  var userSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      age: Number,
      username: String,
      password: String,

  });

  var john = new User({
        firstName: 'John2',
        lastName: 'Smith',
        age: 45,
        username: 'johnnysmith',
        password: 'abc123',

    });

  john.save()
    .then((val) => console.log('Success!! ' + val))
    .catch((err) => console.log('ERROR!!! ' + err))

    console.log('schema defined!');


});




var users = {
  1: 'John',
  2: 'Laura'
};

app.get('/', ( req, res ) => res.send('Just got to the root!'))

var userRoutes = express.Router()

userRoutes.get('/',
  ( req, res, next ) => {
    console.log('Getting users...');
    next();
  },
  ( req, res, next ) => {
    res.send(users);
    next();
  }
)

userRoutes.get('/', (req, res) => {
  console.log('Users sent!')
})

userRoutes.get('/:userId',
  ( req, res, next ) => {
    console.log('Getting a user...');
    if(req.params.userId>2){
      console.log('Unknown user!');
      res.send('Unknown')
      next('route')
    } else {
      next();
    }
  },
  ( req, res, next ) => {
    let userName = users[req.params.userId];
    res.send(`Name: ${userName || 'unknown'}`);
    next();
  }
)

userRoutes.get('/:userId', (req, res) => {
  console.log('A user sent!')
})

app.use('/user', userRoutes);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
