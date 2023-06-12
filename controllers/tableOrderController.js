const TableOrder = require("./../models/tableOrderModel");

const factory = require("./handlerFactory");

exports.getAllTableOrders = factory.getAll(TableOrder);
exports.getTableOrder = factory.getOne(TableOrder);
exports.createTableOrder = factory.createOne(TableOrder);
exports.updateTableOrder = factory.updateOne(TableOrder);
exports.deleteTableOrder = factory.deleteOne(TableOrder);
