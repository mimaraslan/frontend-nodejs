const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if ((req.url == '/') || (req.url =='/index')){
    fs.readFile('index.html', function(error,  data){
      res.statusCode = 200;
      res.write(data);
      res.write('WELLCOME ');
      res.end('INDEX PAGE\n');
    });
  }

  if ((req.url == '/login')){
    fs.readFile('login.html', function(error,  data){
      res.write(data);
      res.end('LOGIN PAGE\n');
    });
  }
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});