const asyncHandler = require("express-async-handler");
const Boutique = require("../models/boutiqueModel").model;
var express = require("express");

//Get Boutique Items
const getBoutiqueItems = asyncHandler(async (req, res) => {
    try
    {
        const boutiqeItems = await Boutique.find({});
        res.status(200).json(boutiqeItems);
    }
    catch (error)
    {
     res.status(500).json({ error: 'Something went wrong' });

    }
    
})

//Get Boutique Items by the category
const getItemsbyCategories = asyncHandler(async (req, res) => {
    try {
        const items = await Boutique.aggregate([
            { $match: {}},
            { $group: {
                _id: '$category',
                items: { $push: '$$ROOT'}
            }},
            { $project: { name: '$_id', items: 1, _id: 0}}
        ])
        res.status(200).send({ data: items})
    } catch (err) {
        res.status(400).send({ error: err})
    }

})
module.exports = {
    getBoutiqueItems,
    getItemsbyCategories
}
