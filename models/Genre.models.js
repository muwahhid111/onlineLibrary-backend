const mongoose = require('mongoose');
const genreSchema = mongoose.Schema({
genreName:String,
description: String

});
const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;