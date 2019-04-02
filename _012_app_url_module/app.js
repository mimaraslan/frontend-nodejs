var express = require('express');
var path = require('path');
var app = express();

//case 1
//var ctrlElektronik = require('./ElektronikController')();

//case 2
var elektronikController = require('./ElektronikController');
var nesneElektronik = elektronikController('BASARILI');

app.use('/public', express.static(path.join(__dirname, 'public')))

var indexController=function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'))
}

var loginController=function(req, res){
  res.sendFile(path.join(__dirname,'login.html'))
}

app.get('/index', indexController);
app.get('/login', loginController);

const hostname = '127.0.0.1';
const port = 3000; // app.listen(3000);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});