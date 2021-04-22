const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // to parse data from front end


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Add routes, both API and view
// app.use(routes);
// app.use("/", require("./routes/api/blogRoute"));


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blognotesDB");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testingDB");


// mongoose.connect("mongodb+srv://admin:qweewq@cluster0.8c4p0.mongodb.net/testingDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// mongoose.connect("mongodb://localhost/blognotesDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// app.use("/", require("./routes/api/blogRoute"));






mongoose.connect("mongodb+srv://admin:qweewq@cluster0.8c4p0.mongodb.net/notesDB", 
{
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
    // useFindAndModify: false 
});
app.use("/", require("./routes/noteRoute"));


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
// app.use("/", require("./routes/noteRoute"));






// Start the API server
// specify the Port route (a home root route) as a proxy key in our frontEnd package.json file
// add to package.json file:  "proxy": "http://localhost:3001/",
app.listen(PORT, function() {
  console.log(`express server now listening on PORT ${PORT}!`);
});
