var mongoose = require('mongoose');

var Whisky = mongoose.model('Whisky', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  size: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  year: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  producer: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  country: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  region: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  subregion: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  color: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  degreeOfAlcohol: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  caskId: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  CaskType: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  },
  woodType: {
    type: String,
    required: false,
    minlength: 1,
    trim: true  //remove leading and trailing white spaces
  }
});


module.exports = { Whisky };