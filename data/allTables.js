// Processes allTables JSON file into Mogo Table Objects

const mongoose = require("mongoose");
const Table = require("../models/tableModel").model;
const fs = require("fs");

let tableData = fs.readFileSync(__dirname + "/allTables.json");
tableData = JSON.parse(tableData).tables;

let allTables = [];

tableData.forEach(table => {
    allTables.push(new Table(table));
});
