const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");

router.route("/")
  .get(signUpController.findAll)
  .post(signUpController.create);

router
  .route("/:id")
  .delete(signUpController.remove);

// router.get('/', (req,res) => res.send('Make a Dent'));    

module.exports = router;
