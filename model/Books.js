const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name:String,
  author:String,
  category:String

});

  module.exports = mongoose.model('Book', bookSchema); 
