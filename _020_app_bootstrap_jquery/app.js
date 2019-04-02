var express = require('express');
var path = require('path');
var app = express();
var ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);
//------------------------------------------
app.use('/public', express.static(path.join(__dirname, 'public')));

//------------------------------------------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './appserver/views'));

//------------------------------------------
var electronicRouter = require('./appserver/routes/ElectronicRouter');
app.use('/', electronicRouter);

//------------------------------------------
app.use(function (req, res, next) {
  console.log("Midleware 1. function - URL: "+ req.url);
  next();
});

app.use(function (req, res, next) {
  console.log("Midleware 2. function - Time: "+ Date.now());
  next();
});
//------------------------------------------

var indexController=function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'))
}

var loginController=function(req, res){
  res.sendFile(path.join(__dirname,'login.html'))
}

app.get('/index', indexController);
app.get('/login', loginController);

//------------------------------------------
const hostname = '127.0.0.1';
const port = 3000; // app.listen(3000);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});