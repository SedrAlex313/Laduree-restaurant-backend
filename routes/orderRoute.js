const express = require("express");
const { placeOrders, getUserOrders } = require("../controllers/customers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/placeorder",protect, placeOrders);
router.get("/getuserorders",protect,getUserOrders)

module.exports = router