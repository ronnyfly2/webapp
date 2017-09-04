'use strict'

var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var productSchema= Schema({
    name: String,
    description: String,
    resume: String,
    firstImage: String,
    numOrder: String,
    urlSeo: String,
    offer: String,
    priceOffer: String,
    priceNormal: String,
    productNew: String,
    state: Number,
    stock:String,
    subCategory:{type:Schema.ObjectId, ref:'SubCategory'} 
});

module.exports = mongoose.model('Product', productSchema);