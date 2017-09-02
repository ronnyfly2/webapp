'use strict'

var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var categorySchema= Schema({
    name: String,
    description: String,
    image: String,
    numOrder: String,
    urlSeo: String,
    state: Number
});

module.exports = mongoose.model('Category', categorySchema);