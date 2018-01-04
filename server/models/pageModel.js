const mongoose = require("mongoose"),
  validator = require("validator");

const PageSchema = new mongoose.Schema({
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
});

var Page = mongoose.model("page", PageSchema);

module.exports = { Page };
