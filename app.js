const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorMiddleware");

require("./data/allTables.js");
require("./data/boutiquMenu");
require("./data/menuDishes");
const boutiqueRoute = require("./routes/boutiqueItemsRoute");
const orderRoute = require("./routes/orderRoute");
const mealsRoute = require("./routes/mealsRoute");
const blogRoute = require("./routes/blogRoute");
const tableOrderRoute = require("./routes/tableOrderRoute");
const reviewRoute = require("./routes/reviewRoute");


// Security
const rateLimit = require('express-rate-limit');


// Limit requests  from The same ip 100 request
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,  //per 1 hour
  message:
    'Too many requests from this IP ,please try again in an hour!',
});


const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", ""], //add the following link to this cors
    credentials: true,
  })
);

//Routes
app.use("/api/users", userRoute);
app.use("/api/availability", require("./routes/availabilityRoute"));
app.use("/api/reservation", require("./routes/reservationRoute"));
app.use("/api/boutique", boutiqueRoute);
app.use("/api/posts", blogRoute);
app.use("/api/boutique/orders", orderRoute);
app.use("/api/menu", mealsRoute);
app.use("/api/tableOrders", tableOrderRoute);
app.use("/api/reviews", reviewRoute);


app.get("/", (req, res) => {
  res.send("Home Page");
});

//Error Handler
app.use(errorHandler);

module.exports = app;
