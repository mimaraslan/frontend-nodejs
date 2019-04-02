DEMO 13 - URL ADRESLER ICIN MODUL TANIMLAMA ve MODULLERE ADRES YOLU VERME



_013_app_url_module_path/elektronik.html
_013_app_url_module_path/bilgisayar.html
-------------------------------------------------
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/style.css">
<body>
<h1>Elektronik Sayfasi</h1>
<a href="/index">INDEX</a> | 
<a href="/login">LOGIN</a> | 
<a href="/elektronik">ELEKTRONIK</a> | 
<a href="/elektronik/bilgisayar">BİLGİSAYAR</a> | <hr>
<p class="MyCssClass">ELEKTRONIK</p>
</body>
</html>



_013_app_url_module_path/ElektronikController.js
-------------------------------------------------
var path = require('path');

module.exports.elektronik=function(req, res){
    res.sendFile(path.join(__dirname, 'elektronik.html'))
    console.log("elektronik module call");
}

module.exports.bilgisayar=function(req, res){
    res.sendFile(path.join(__dirname,'bilgisayar.html'))
    console.log("bilgisayar module call");
}


TERMINAL
cd ..
cd _013_app_url_module_path
npm install
npm install --save path
npm start
