const router = require("express").Router();
const gitHubController = require("../../controllers/gitHubController");

router.route("/")
  .get(gitHubController.findAll)
  .post(gitHubController.create);

router
  .route("/:id")
  .delete(gitHubController.remove);

// router.get('/', (req,res) => res.send('Make a Dent'));  

module.exports = router;
