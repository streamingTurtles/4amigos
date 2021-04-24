// IMPORTS:
//
// PREVIOUS CONST's - BEFORE THE ADDITION OF packages for the signin AUTH, PASSPORT, ect...
// const express = require("express"); 
// const app = express(); 
// const cors = require("cors"); 
// const mongoose = require("mongoose"); 
// const routes = require("./routes"); 

const PORT = process.env.PORT || 3001;
// AUTH - added and reordered 
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");


const app = express();
const routes = require("./routes");  // need this !!!
const User = require("./models/user");  // this will add the user/s to the db 
// -----------------------------------------------------------------------------------------|
// -------------------------------------- END IMPORTS --------------------------------------|
// -----------------------------------------------------------------------------------------|
// 
// CONNECT TO MONGOOSE - ATLAS DB:
//
// Connect to a local Mongo DB or to the Heroku mongoose db
// mongoose.connect(
// process.env.MONGODB_URI || "mongodb://localhost/notesDB",
//     {
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     }
// );
mongoose.connect("mongodb+srv://admin:qweewq@cluster0.8c4p0.mongodb.net/notesDB", 
{
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,
    // useFindAndModify: false, 
},
() => {console.log("!!!  Mongoose is Connected  !!!")}
);
//
// Middleware: 
//
app.use(cors());
// using this cors below breaks it on heroku - will not render blognotesall
// app.use(cors({
//     origin: "http://localhost:3000", // location fo the react app that we connect to
//     credentials: true
// }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // to parse data from front end
// AUTH - added middleware for User Auth
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "project3",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("project3"))
// after making passportConfig.js file need to make the Auth fully passport - so initialize them
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
// now implement the local stragety in the login route below
// -----------------------------------------------------------------------------------------|
// -------------------------------------- END DB & MIDDLEWARE ------------------------------|
// -----------------------------------------------------------------------------------------|
//
//
// ROUTES:
//
// Below here - before adding AUTH - passport login routes
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use("/", require("./routes/noteRoute"));
//
//
//
app.post("/login", (req, res, next) =>{
  // console.log("login route")
  // console.log(req.body);
  // implement the local strategy here
    passport.authenticate("local", (err,user,info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user,(err) => {
          if (err) throw err;
          res.send('Successfully Authenticated');
          console.log(req.user);
        });
      }
    })(req, res, next);
});
app.post("/register", (req, res) =>{
  // console.log("register route")
  // console.log(req.body);
  User.findOne({username: req.body.username}, async (err,doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        // password: req.body.password,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) =>{
  res.send(req.user);  // The req.user stores the entire user that has been authenticated inside of it.
});
// NOTES:
// Once authenticated, the user is now stored in the req.user
// The req object you get from the client, now contains a user object inside of it, with all the session data.
// This can be used and called anytime in the application.







// -----------------------------------------------------------------------------------------|
// -------------------------------------- END ROUTES ------------------------------|
// -----------------------------------------------------------------------------------------|
//
//
// Start the EXPRESS server
// specify the Port route (a home root route) as a proxy key in our frontEnd package.json file
// add to package.json file:  "proxy": "http://localhost:3001/",
// START SERVER
app.listen(PORT, function() {
  console.log(`!!! express server now listening on PORT ${PORT}!!!`);
});
//
//
//
// END OF FILE