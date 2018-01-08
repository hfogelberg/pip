const mongoose = require("mongoose"),
  validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  photo: {
    type: String,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  tokens: [{ token: String }]
});

var User = mongoose.model("User", UserSchema);
module.exports = { User };
