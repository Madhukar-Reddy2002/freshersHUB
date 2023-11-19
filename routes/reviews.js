const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/freshershub");

const ReviewSchema = new mongoose.Schema({
  reviewfrom: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  reviewto: {type: String},
  rating: {type: Number, min: 1, max: 5}, 
  comment: {type:String}
});

module.exports = mongoose.model('Review', ReviewSchema);