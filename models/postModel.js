const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema
({
    title: 

    { 
        type: String, 
        required: true
    }, 
    content:

    { 
        type: String, 
        required: true
    },   
    image: 
    {
        type: String,
        required: true,
    },  
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });



const Post = mongoose.model('Post', postSchema);


module.exports.model = Post;
module.exports.schema = postSchema;