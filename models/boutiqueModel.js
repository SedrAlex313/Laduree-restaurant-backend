const mongoose  = require("mongoose");

let boutiqueSchema = new  mongoose.Schema({
    name:  
    {
        type: String, 
        required: true
    },
    image: 
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
    description:  
    {
        type:String, 
        required: true
    },
    
})
let Boutique = mongoose.model('Boutique', boutiqueSchema);

module.exports.model = Boutique;
module.exports.schema = boutiqueSchema;