const router = require("express").Router();
const signUpRoutes = require("./signUps");

// signup route
router.use("/signUps", signUpRoutes);

module.exports = router;