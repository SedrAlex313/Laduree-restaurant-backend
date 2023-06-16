const mongoose = require("mongoose");
const Boutique = require("../models/boutiqueModel");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: [0, "Minimum rating is 0"],
      max: [5, "Maximum rating is 5"],
      default: 0,
    },
    review: {
      type: String,
      required: [true, "Please add your review"],
      maxlength: 300,
    },
    boutique: {
      type: mongoose.Schema.ObjectId,
      ref: "Boutique",
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ boutique: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
