const express = require("express");
const tableOrderCtlr = require("../controllers/tableOrderController");

const router = express.Router();
router
  .route("/")
  .post(tableOrderCtlr.createTableOrder)
  .get(tableOrderCtlr.getAllTableOrders);

router
  .route("/:id")
  .patch(tableOrderCtlr.updateTableOrder)
  .delete(tableOrderCtlr.deleteTableOrder)
  .get(tableOrderCtlr.getTableOrder);
  
module.exports = router;
