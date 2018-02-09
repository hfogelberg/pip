const mongoose = require("mongoose"),
  validator = require("validator");

const ArtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  image: {
    type: String,
    trim: true,
    required: true
  },
  comment: {
    type: String,
    trim: true
  },
  isPriority: {
    type: Boolean,
    required: true,
    default: false
  },
  display: {
    type: Boolean,
    required: true,
    default: false
  }
});

var Artwork = mongoose.model("artwork", ArtSchema);
module.exports = { Artwork };
