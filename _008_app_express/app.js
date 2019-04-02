const fs = require('fs');
var express = require('express');
var app = express();

app.get('/index', function(req, res){
  fs.readFile('index.html', function(error, data){
    res.write(data);
    res.end('INDEX PAGE');
    console.log('homeController');
  });
});

app.get('/login', function(req, res){
  fs.readFile('login.html', function(error, data){
    res.write(data);
    res.end('LOGIN PAGE');
    console.log('loginController');
  });
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});