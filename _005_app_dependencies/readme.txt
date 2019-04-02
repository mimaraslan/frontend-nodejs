DEMO 5 PROJENIN IHTIYAC DUYDUGU MODULLERI package.json
ICINE OROMATIK OLARAK KAYDETTIRME VE PROJE ICINE YUKLEME

TERMINAL
cd ..
cd _005_app_dependencies
npm install
npm install express --save
npm start

PROJEYE OTOMATIK OLARAK node_modules KLASORU VE ICINDEKILER EKLENDI
TERMINAL - PAKET SILMEK ICIN npm remove ya da npm uninstall KOMUTLARINI KULLANIYORUZ
https://docs.npmjs.com/uninstalling-packages-and-dependencies

npm remove express --save

_005_app_dependencies/package.json 
DOSYASI DA dependencies KISMI OTOMATIK OLARAK KENDISINI GUNCELLEDI

{
    "name": "_004_App",
    "version": "1.0.0",
    "scripts": {
        "start": "nodemon app.js"
    },
    "dependencies": {
        "express": "^4.16.4"
    }
}


PROJEYI BIR YERE TASIRKEN node_modules KLASORUNE GEREK YOKTUR. 
node_modules klasörünü silip kodları öyle paylaşacağız.

