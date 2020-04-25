var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  description: String
});

var Song = mongoose.model("Song", SongSchema);
module.exports = Song;
