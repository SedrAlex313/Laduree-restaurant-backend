const mongoose  = require("mongoose");
const tableSchema = require("./tableModel").schema;

let daySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    tables:[tableSchema],
})
let Day = mongoose.model("Day",daySchema)

module.exports.model = Day;
module.exports.schema = daySchema;