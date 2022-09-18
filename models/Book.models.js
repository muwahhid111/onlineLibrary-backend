const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    nameBook: String,
    genreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
        default: null
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;