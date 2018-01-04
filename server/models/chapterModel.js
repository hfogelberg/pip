const mongoose = require("mongoose"),
  validator = require("validator");

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is missing"],
    trim: true
  },
  image: {
    type: String
    // required: [true, "image is missing"]
  },
  pages: [
    {
      text: {
        type: String,
        required: [true, "Text is missing"],
        trim: true
      },
      pageNumber: {
        type: Number
      },
      image: {
        type: String
      }
    }
  ]
});

var Chapter = mongoose.model("chapter", ChapterSchema);
module.exports = { Chapter };
