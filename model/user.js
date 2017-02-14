import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    username: String,
    password: String,

});

var User = mongoose.model('User', userSchema);

export default User;
