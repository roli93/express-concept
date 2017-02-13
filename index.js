var express = require('express');

var app = express();

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
