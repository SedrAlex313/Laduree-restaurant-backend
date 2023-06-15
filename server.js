require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");

var db = mongoose.connection;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
