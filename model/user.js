import mongoose from 'mongoose';
import bookSchema from './book.js';

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    username: String,
    password: String,
    books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }]
});

var User = mongoose.model('User', userSchema);

// We imporve on Mongoose to wrap nonexistent users in a Rejected Promise
function userById(id){
  return User.findById(id).exec()
  .then((user) =>{
    if(!user){
      return Promise.reject(new Error('User not found'));
    } else {
      return Promise.resolve(user);
    }
  })
}

User.byId = userById;

export default User;
