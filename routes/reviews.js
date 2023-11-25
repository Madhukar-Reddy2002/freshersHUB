const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const ReviewSchema = new mongoose.Schema({
  reviewfrom: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  reviewto: {type: String},
  rating: {type: Number, min: 1, max: 5}, 
  comment: {type:String}
});

module.exports = mongoose.model('Review', ReviewSchema);