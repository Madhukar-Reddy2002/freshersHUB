const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  skills :{
    type: String,
    required:true
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'review'
  }
  ],
  email: {
    type: String,
    required: true,
    unique: true
  }
});

UserSchema.plugin(plm);
module.exports = mongoose.model('User', UserSchema);