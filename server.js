require('./models/db');
require('dotenv').config()
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const employeeController = require('./controller/employeeController');
const loginController = require('./controller/loginController');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleWare/auth');
const { verify } = require('crypto');
var app = express();

const posts = [
  {
    userId: 1,
    post: 'Post TriTran'
  },
  {
    userId: 2,
    post: 'Post TranTri'
  }
]
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.get('/posts', verifyToken, (req, res) => {
  res.json(posts.filter(post => post.userId === req.userId))
})
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine(
  'hbs',
  exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
  }),
);

app.set('view engine', 'hbs');

app.post('/api/register', async(req,res) => {
  console.log(req.body);
  const {userName, passWord} = req.body;
  console.log(await bcrypt.hash(passWord, 10));
  res.json({status: 'ok'})
})

app.use('/employee', employeeController);
// app.use('/login', loginController);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
console.log(`Server started on port ${PORT}`));
