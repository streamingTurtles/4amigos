const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  // _id: { type: String},  dont need automatically created for us
  name: { type: String},
  repo: { type: Array},
  description: String,
  image: String,
  link: String
});

const SignUp = mongoose.model("SignUp", signUpSchema);

module.exports = SignUp;