const mongoose = require('mongoose');
const db = require ('./index.js');

const gallerySchema = new mongoose.Schema({
  _id: Number,
  imageUrl: [String],
  address: String,
  zipcode: String,
  city: String,
  State: String,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

