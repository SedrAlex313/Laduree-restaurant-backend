const express = require("express");
const router = express.Router();
const {updateCart}  = require("../controllers/customers/cartController");

router.get("/updatecart", updateCart);

module.exports = router;
