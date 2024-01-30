const mongoose = require('mongoose');

const footwearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

const Footwear = mongoose.model('Footwear', footwearSchema);

module.exports = Footwear;

