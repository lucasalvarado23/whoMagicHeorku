const router = require("express").Router();
const wmUserController = require("../../controllers/wmUserController");

router
  .route("/")
  .post(wmUserController.create);

router
  .route("/:email")
  .get(wmUserController.findOne);

router
  .route("/:userUpdate")
  .put(wmUserController.findOneAndUpdate);

 // .delete(wmUserController.remove);

 // .put(booksController.update)
 // .delete(booksController.remove);

module.exports = router;