const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var homeController = function(req, res){
    fs.readFile('index.html', function(error, data){
      res.write(data);
      res.end('INDEX PAGE\n');
    });
  }

  var loginController = function(req, res){
    fs.readFile('login.html', function(error, data){
      res.write(data);
      res.end('LOGIN PAGE\n');
    });
  }

const server = http.createServer((req, res) => {
  console.log(req.url);

  if ((req.url == '/') || (req.url =='/index')){
    homeController(req, res);
  }

  if ((req.url == '/login')){
    loginController(req, res);
  }
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});