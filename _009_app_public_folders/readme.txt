DEMO 9 - PUBLIC FOLDER AND CSS

_009_app_public_folders/public/css/style.css
.MyCssClass{
    font-size: xx-large;
    background-color: aqua;
}


_009_app_public_folders/index.html
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="/public/css/ style.css">
<body>
<h1>Index Sayfasi</h1>
<a href="index">INDEX</a>
<a href="login">LOGIN</a><hr>
<p class="MyCssClass">HELLO CSS</p>
</body>
</html>


TERMINAL
cd ..
cd _009_app_public_folders
npm install -g nodemon
npm install
npm install --save path
npm install --save express 
npm start