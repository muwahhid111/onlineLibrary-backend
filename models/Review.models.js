const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema({
  bookId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
    default: null
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  content: String,
});


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;