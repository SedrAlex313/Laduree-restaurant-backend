const mongoose = require('mongoose');

const { Schema } = mongoose;

const mealSchema = new Schema({
  name: 
    { 
        type: String, 
        required: true
    },
  price: 
    { 
        type: Number, 
        required: true 
    },
category: 
    {
        type: String,
        required: true,
    },
image: 
    {
        type: String,
        required: true,
    },
  
});

const Meal = mongoose.model('Meal', mealSchema);


module.exports.model = Meal;
module.exports.schema = mealSchema;