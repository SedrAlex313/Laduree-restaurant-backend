var express = require("express");
const asyncHandler = require("express-async-handler")

const updateCart = asyncHandler(async (req, res) => {
               let cart = {
                 items:{
                     boutiqeId: { item: boutiqeObject, qty:0 },
                 },
                        
                        totalQty:   0,
                        totalPrice: 0
                      }
                 return res.json({data:"all ok"})
           }
         )
module.exports = {
  updateCart
}








