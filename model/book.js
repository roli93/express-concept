import mongoose from 'mongoose';

var bookSchema = mongoose.Schema({
    title: String,
    author: String,
    yearPublished: Number,
    ISBN: String
});

export { bookSchema };

var Book = mongoose.model('Book', bookSchema);
export default Book;
