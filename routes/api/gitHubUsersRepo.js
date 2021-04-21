const router = require("express").Router();
const gitHubController = require("../../controllers/gitHubController");

router.route("/")
  .get(gitHubController.findAll)
  .post(gitHubController.create);

router
  .route("/:id")
  .delete(gitHubController.remove);

module.exports = router;
