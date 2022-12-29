const mongoose = require('mongoose');
var employSchema = new mongoose.Schema({
  typeEquipment: {
    type: String,
    require: true
  },
  nameDevice: {
    type: String,
    require: true
  },
  deviceID: {
    type: String,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  employeeAssign: {
    type: String,
    require: true
  }
});

var userLogin = new mongoose.Schema({
  userName: {
    type: String
  },
  passWord: {
    type: String
  }
});
// employSchema.path('email').validate((val) => {
//   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return emailRegex.test(val);
// }, 'Invalid e-mail.');
mongoose.model("UserLogin", userLogin);
mongoose.model('Employee', employSchema);