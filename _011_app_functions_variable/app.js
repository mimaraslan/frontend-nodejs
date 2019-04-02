var express = require('express');
var path = require('path');
var app = express();

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