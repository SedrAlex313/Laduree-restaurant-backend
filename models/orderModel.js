const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    customerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
                },
    orderItems: 
    { 
        type: Object, 
        required: true 
    },
    orderAmount: 
    { 
        type: Object, 
        required: true 
    }, 
    phone: 
    { 
        type: String, 
        required: true
    },
    address: 
    { 
        type: String, 
        required: true
    },
    paymentType: 
    {
         type: String, 
         default: 'COD'
        },
    paymentStatus: 
    { 
        type: Boolean, 
        default: false 
    },
    orderStatus: 
    { 
        type: String,
        default: 'order_placed'
    },
}, 
{ 
    timestamps: true 
})

module.exports = mongoose.model('orders', orderSchema);

const newOrder = new Order({
    customerId: '6431bc0ae5568b72395a74ce',
    orderItems: {  
        item1: {
        name: 'Passionate Romance Rose',
        price: 10.99,
        quantity: 2
      },
      item2: {
        name: 'Blueberry Dacquoise Pastry',
        price: 10.00,
        quantity: 3
      },},
    orderAmount: { subtotal: 20.99,},
    phone: '1234567890',
    address: '123 Main St',
    paymentType: 'COD',
    paymentStatus: false,
    orderStatus: 'order_placed'
  });
  
  newOrder.save()
    .then(savedOrder => {
      console.log('Order saved successfully:', savedOrder);
      // Handle any additional logic or send response to the client
    })
    .catch(error => {
      console.error('Error saving order:', error);
      // Handle the error or send an error response to the client
    });