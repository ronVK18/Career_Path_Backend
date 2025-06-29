// models/article.js

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  expert:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true,
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,

  },

  date: {
    type: Date,
    default: Date.now()
  },

  thumbnail: {
    type: String, 
    default: null
  },

  idFeatured:{
    type:Boolean,
    default:false
  }

});

module.exports = mongoose.model('Article', articleSchema);
