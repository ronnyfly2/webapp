'use strict'

var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var subCategorySchema= Schema({
    name: String,
    description: String,
    urlSeo: String,
    numOrder: String,
    image: String,
    category:{type:Schema.ObjectId, ref:'Category'} 
});

module.exports = mongoose.model('SubCategory', subCategorySchema);