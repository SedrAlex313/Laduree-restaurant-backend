var express = require("express");
const asyncHandler = require("express-async-handler")
const Order = require("../../models/orderModel");
const { v4: uuidv4 }  = require("uuid") ;
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


const placeOrders = asyncHandler(async (req, res) => {
       
     const {token,subtotal, currentUser, cartItems} = req.body
     
     

     if (isNaN(subtotal)) {
       // Handle the error for an invalid subtotal value
       return res.status(400).json({ error: "Invalid subtotal value" });
     }
     
     try {
       const customer = await stripe.customers.create({
         email: token.email,
         source: token.id,
       });
     
       const payment = await stripe.charges.create(
         {
           amount: subtotal * 100,
           currency: "eur",
           customer: customer.id,
           receipt_email: token.email,
         },
         {
           idempotencyKey: uuidv4(),
         }
       );
     
      
     
               
           
            if(payment)
            {
                const neworder = new Order({
                    // name: currentUser.name,
                    emai: currentUser.email,
                    userid: currentUser._id,
                    orderItems : cartItems,
                    orderAmount: subtotal,
                    shippingAddress : {
                        street : token.card.address_line1,
                        city:    token.card.address_city,
                        country: token.card.address_country,
                        pincode: token.card.address_zip,
                     },
                     transactionId: payment.source.id
                })
                       neworder.save()
                       
                       res.send('Order placed successfully')
            }
                  else
                  {
                      res.send('Payment failed')
                  }

     }
        catch(error)
        {
               return res.status(400).json({ 
                message : 'Something went wrong' + 
                error
              }
                )
        }


});

const getUserOrders = asyncHandler(async (req, res) => {
      const{ userid } = req.body
      try
      {
        if(!userid){
        res.status(500);
        throw new Error("Something went wrong")
      }
          const orders = await Order.find(
            {
              userid: userid
            })
          res.send(orders)
      } catch(error) 
      {
        return res.status(400).json({ 
          message : 
          'Placing orders first'
        })

      }




})
module.exports = {
    placeOrders,
    getUserOrders
}