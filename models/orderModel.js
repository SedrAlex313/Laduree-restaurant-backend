const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "order name required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    userid: {
      type: String,
      require
    },
    orderItems: [],
    shippingAddress: {
      type:Object
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    isDeliverd: {
      type: Boolean,
      required: true,
      default: false,
    },
    transectionId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

