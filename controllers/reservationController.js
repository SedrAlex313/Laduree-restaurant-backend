var express = require("express");

const asyncHandler = require("express-async-handler")

const Day = require("../models/dayModel").model;
const Reservation = require("../models/reservationModel").model;

// Parameters:
// {
//   "date": String ("May 02 2023 06:00"),
//   "table": table id,
// 	"name": String,
// 	"phone": String,
// 	"email": String
// }

const reserveTable = asyncHandler (async(req, res)  => {
    
    try {
        const days = await Day.find({ date: req.body.date });
    
        if (days.length > 0) {
          const day = days[0];
          const tableIndex = day.tables.findIndex(t => t._id.toString() === req.body.table);

          if (tableIndex !== -1) {
            const table = day.tables[tableIndex];
            table.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email
            });
            table.isAvailable = false;
    
            await day.save();
            console.log("Reserved");
            return res.status(201).send("Added Reservation");
          }
        }
        console.log("Day not found");
        res.status(404).send("Day not found"); // Send a response if day not found
      } catch (error) {
        console.error(error);
        res.status(500).send("Server Error"); // Send a response in case of an error
      }
    });
      

 
module.exports = 
{
    reserveTable
};
