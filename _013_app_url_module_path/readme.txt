DEMO 13 - ADDRESS TO MODULES 

_013_app_url_module_path/electronic.html
-------------------------------------------------
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/style.css">
<body>
<h1>Electronic Page</h1>
<a href="/index">INDEX</a> | 
<a href="/login">LOGIN</a> | 
<a href="/electronic">ELECTRONIC</a> | 
<a href="/electronic/computer">COMPUTER</a> | <hr>
<p class="MyCssClass">ELECTRONIC</p>
</body>
</html>


_013_app_url_module_path/computer.html
-------------------------------------------------
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/style.css">
<body>
<h1>Computer Page</h1>
<a href="/index">INDEX</a> | 
<a href="/login">LOGIN</a> | 
<a href="/electronic">ELECTRONIC</a> | 
<a href="/electronic/computer">COMPUTER</a> | <hr>
<p class="MyCssClass">COMPUTER</p>
</body>
</html>



_013_app_url_module_path/ElektronikController.js
-------------------------------------------------
var path = require('path');

module.exports.electronic=function(req, res){
    res.sendFile(path.join(__dirname, 'electronic.html'))
    console.log("electronic module invoked");
}

module.exports.computer=function(req, res){
    res.sendFile(path.join(__dirname,'computer.html'))
    console.log("computer module invoked");
}


TERMINAL
cd ..
cd _013_app_url_module_path
npm install -g nodemon
npm install
npm install --save path
npm install --save express 
npm start
