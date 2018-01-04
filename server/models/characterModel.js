const mongoose = require("mongoose"),
  validator = require("validator");

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is missing"],
    trim: true
  },
  image: {
    type: String
    // required: [true, "image is missing"]
  },
  description: {
    type: String,
    // required: [true, "description is missing"],
    trim: true
  }
});

var Character = mongoose.model("Character", CharacterSchema);
module.exports = { Character };
