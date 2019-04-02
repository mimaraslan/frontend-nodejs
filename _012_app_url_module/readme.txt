DEMO 12 - URL ADRESLER ICIN MODUL TANIMLAMA

//case 2
_012_app_url_module/ElektronikController.js
module.exports = function(gelenMesaj){
    console.log("Elektronik Controller cagirildi. "+ gelenMesaj);
}


TERMINAL
cd ..
cd _012_app_url_module
npm install
npm install --save path
npm start

//case 3
_012_app_url_module/elektronik.html
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/style.css">
<body>
<h1>Elektronik Sayfasi</h1>
<a href="index">INDEX</a> | 
<a href="login">LOGIN</a> | 
<a href="elektronik">ELEKTRONIK</a> | 
<a href="bilgisayar">BİLGİSAYAR</a> | <hr>
<p class="MyCssClass">ELEKTRONIK</p>
</body>
</html>

_012_app_url_module/bilgisayar.html
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/style.css">
<body>
<h1>Bilgisayar Sayfasi</h1>
<a href="index">INDEX</a> | 
<a href="login">LOGIN</a> | 
<a href="elektronik">ELEKTRONIK</a> | 
<a href="bilgisayar">BİLGİSAYAR</a> | <hr>
<p class="MyCssClass">BİLGİSAYAR</p>
</body>
</html>