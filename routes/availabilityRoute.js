const express = require("express");
const { getDays } = require("../controllers/availabilityController");
const router = express.Router()

router.post("/", getDays);

module.exports = router