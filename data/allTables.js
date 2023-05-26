//  // Processes allTables JSON file into Mongo table objects

// var mongoose = require("mongoose");
// const Table = require("../models/tableModel").model;
// const fs = require("fs");

// let tableData = fs.readFileSync(__dirname + "/allTables.json");
// tableData = JSON.parse(tableData).tables;
// console.log("Parsed tableData:", tableData); // Debug: Check the content of tableData

// let allTables = [];
// tableData.forEach(table => {
//   allTables.push(new Table(table));
// });

// // Save allTables data to the database
// (async () => {
//   try {
//     await Table.insertMany(allTables);
//     console.log("Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// })();



 

