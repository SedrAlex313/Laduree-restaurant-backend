var express = require("express");
const asyncHandler = require("express-async-handler")
const Day = require("../models/dayModel").model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00")
// }
const getDays = asyncHandler(async (req, res) => {
console.log("request attempted");

console.log(req.body);
const dateTime = new Date(req.body.date);

async function findOrCreateDay() {
  try {
    const docs = await Day.findOne({ date: dateTime });
    if (docs) {
      // Record already exists
      console.log("Record exists. Sent docs.");
      res.status(200).send(docs);
    } else {
      // Searched date does not exist and we need to create it
      const allTables = require("../data/allTables");
      const day = new Day({
        date: dateTime,
        tables: allTables
      });
      const savedDay = await day.save();
      console.log("Created new datetime. Here are the default docs");
      res.status(201).send(savedDay);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Could not search for date");
  }
}

findOrCreateDay();

})

module.exports = {
  getDays

}

