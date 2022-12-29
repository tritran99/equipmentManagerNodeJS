const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  passWord: {
    type: String,
    require: true
  },
  refreshToken: {
    type: String,
    default: null
  },
  accessToken: {
    type: String,
    default: null
  } 
});
const usermodel = mongoose.model('UserRegister', userSchema);
module.exports = usermodel;