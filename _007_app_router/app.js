const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var myRouter = new Object();

var homeController = function(req, res){
    fs.readFile('index.html', function(error, data){
      res.write(data);
      res.end('INDEX PAGE\n');
      console.log(homeController);
    });
  }

  var loginController = function(req, res){
    fs.readFile('login.html', function(error, data){
      res.write(data);
      res.end('LOGIN PAGE\n');
      console.log(loginController);
    });
  }

myRouter['/'] = homeController;
myRouter['/index'] = homeController;
myRouter['/login'] = loginController;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if(req.url in myRouter)
    myRouter[req.url](req, res);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});