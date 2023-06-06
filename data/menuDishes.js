//   // Processes Meals  JSON file into Mongo Meal objects

// var mongoose = require("mongoose");
// const Meal = require("../models/mealModel").model;
// const fs = require("fs");

// let MenuData = fs.readFileSync(__dirname + "/mealsMenu.json");
//     MenuData = JSON.parse(MenuData).meals;
// console.log("Parsed MenuData:", MenuData); // Debug: Check the content of MenuData

// let MenuItems = [];
// MenuData.forEach(meal => {
//   MenuItems.push(new Meal(meal));
// });

// // Save BoutiqueItems data to the database
// (async () => {
//   try {
//     await Meal.insertMany(MenuItems);
//     console.log("Meals Menu inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// })();