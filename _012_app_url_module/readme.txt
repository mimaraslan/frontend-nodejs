DEMO 12 - CREATE MODULES FOR URL ADDRESSES

//case 2
_012_app_url_module/ElectronicController.js
module.exports = function(myParam){
    console.log("Electronic Controller cagirildi. "+ myParam);
}


TERMINAL
cd ..
cd _012_app_url_module
npm install
npm install --save path
npm start

//case 3
_012_app_url_module/electronic.html
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

_012_app_url_module/computer.html
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