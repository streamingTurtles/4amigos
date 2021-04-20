const router = require("express").Router();
const signUpController = require("../../controllers/signUpController");

router.route("/")
  .get(signUpController.findAll)
  .post(signUpController.create);

router
  .route("/:id")
  .delete(signUpController.remove);

module.exports = router;
