  // Processes BoutiqurMenu JSON file into Mongo Boutique objects

// var mongoose = require("mongoose");
// const Boutique = require("../models/boutiqueModel").model;
// const fs = require("fs");

// let BoutiqueData = fs.readFileSync(__dirname + "/boutiqueMenu.json");
// BoutiqueData = JSON.parse(BoutiqueData).boutiqueItems;
// console.log("Parsed BoutiqueData:", BoutiqueData); // Debug: Check the content of BoutiqueData

// let BoutiqeItems = [];
// BoutiqueData.forEach(boutique => {
//     BoutiqeItems.push(new Boutique(boutique));
// });

// // Save BoutiqueItems data to the database
// (async () => {
//   try {
//     await Boutique.insertMany(BoutiqeItems);
//     console.log("BoutiqueMenu inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// })();