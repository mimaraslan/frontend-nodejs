var express = require('express');
var path = require('path');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))

var electronicController = require('./ElectronicController');
app.use('/', electronicController);
// http://localhost:3000/electronic
// http://localhost:3000/electronic/computer

// app.use('/shopping', electronicController);
// http://localhost:3000/shopping/electronic
// http://localhost:3000/shopping/electronic/computer


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