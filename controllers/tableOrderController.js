const TableOrder = require("./../models/tableOrderModel");

const factory = require("./handlerFactory");

exports.getAllTableOrders = factory.getAll(TableOrder);
exports.getTableOrder = factory.getOne(TableOrder, {
  path: "meals.meal",
  select: "name",
});

exports.createTableOrder = factory.createOne(TableOrder);
exports.updateTableOrder = factory.updateOne(TableOrder);
exports.deleteTableOrder = factory.deleteOne(TableOrder);

exports.addTimestampsToRequest = (req, res, next) => {
  if (req.body.status) {
    if (req.body.status === "completed")
      req.body.preparationCompletedAt = Date.now();
    else if (req.body.status === "delivered")
      req.body.deliveryDate = Date.now();
    console.log(req.body);
    // else return next (new Error ())
    next();
  }
  next();
};
