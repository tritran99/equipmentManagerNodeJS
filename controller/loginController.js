const express = require('express');
// const employeeController = require('./controller/employeeController');
var router = express.Router();
var mongoose = require('mongoose');
const UserLogin = mongoose.model('UserLogin');
// const UserRegister = mongoose.model('UserRegister');
router.get('/login', (req,res) => {
  res.render("loginPage", {
    viewTitle: "Login"
  });
});

// router.post('/login', (req, res) => {
//   loginUser(req, res);
// });
router.get('/register', (req, res) => {
  res.render("register/register", {
    viewTitle: "Register User"
  });
});
function loginUser(req,res) {
  var userLogin = new UserLogin();
  userLogin.userName = req.body.userName;
  userLogin.passWord = req.body.passWord;
  userLogin.save((err, doc) => {
    res.render("login/loginPage", {
      viewTitle: "Login",
      userLogin: req.body
    });
  });
  console.log("Add successfull");
}


module.exports = router;