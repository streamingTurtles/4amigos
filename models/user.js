// const mongoose = require("mongoose");
// const user = new mongoose.Schema({
//     username: String,
//     password: String,
// });
// module.exports = mongoose.model("User", user);


const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    username: String,
    password: String

})
const User = mongoose.model("User", usersSchema);
module.exports = User;


