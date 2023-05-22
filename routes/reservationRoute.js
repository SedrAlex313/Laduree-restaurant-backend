var express = require("express");
const { reserveTable } = require("../controllers/reservationController");

var router = express.Router();


router.post("/", reserveTable);



module.exports = router;
