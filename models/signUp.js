const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  _id: { type: String},
  name: { type: String},
  repo: { type: Array},
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("SignUp", signUpSchema);

module.exports = SignUp;