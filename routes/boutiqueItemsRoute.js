const express = require("express");
const { getBoutiqueItems, getItemsbyCategories } = require("../controllers/boutiqueItemController");
const router = express.Router()

router.get("/getItems",getBoutiqueItems);
router.get("/Items-by-categories",getItemsbyCategories);


module.exports = router