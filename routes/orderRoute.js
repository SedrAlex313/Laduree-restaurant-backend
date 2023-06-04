const express = require("express");
const { placeOrders } = require("../controllers/customers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/placeorder", placeOrders);

module.exports = router