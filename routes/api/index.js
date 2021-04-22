

const router = require("express").Router();
const signUpRoutes = require("./signUps");
const gitHubUsersRepoRoutes = require("./gitHubUsersRepo");

// signup route
router.use("/signUps", signUpRoutes);


// signup route
router.use("/gitHubUsersRepo", gitHubUsersRepoRoutes);





module.exports = router;

