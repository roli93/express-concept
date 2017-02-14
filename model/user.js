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

export default User;
