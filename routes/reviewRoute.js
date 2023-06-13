const express = require("express");
const reviewCtlr = require("../controllers/reviewController");

const router = express.Router();

router.route("/").post(reviewCtlr.createReview).get(reviewCtlr.getAllReviews);
router
  .route("/:id")
  .get(reviewCtlr.getReview)
  .patch(reviewCtlr.updateReview)
  .delete(reviewCtlr.deleteReview);

module.exports = router;
