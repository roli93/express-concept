import mongoose from 'mongoose';
import api from './api';

//This makes Mongoose use ES6 Promises
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1:27017');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Connection error:'));

db.once('open', () => {

  console.log('MongoDB connection successful!')

  api.listen(3000, function () {
    console.log('App listening on port 3000...')
  })

});
