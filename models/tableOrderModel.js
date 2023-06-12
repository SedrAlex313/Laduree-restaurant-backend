const mongoose = require("mongoose");

const tableOrderSchema = mongoose.Schema({
  orderNumber: {
    type: String,
    unique: true,
  },
  table: {
    type: mongoose.Schema.ObjectId,
    ref: "Table",
    required: [true],
  },
  meals: [
    {
      meal: {
        type: mongoose.Schema.ObjectId,
        ref: "Meal",
      },
      quantity: Number,
    },
  ],
  note: String,
  status: {
    type: String,
    enum: ["open", "completed", "delivered"],
    default: "open",
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },

  preparationCompletedAt: {
    type: Date,
    default: null,
  },
  deliveryDate: {
    type: Date,
    default: null,
  },
});

const TableOrder = mongoose.model("TableOrder", tableOrderSchema);

module.exports = TableOrder;
