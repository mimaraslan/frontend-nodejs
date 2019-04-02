var path = require('path');

module.exports.elektronik=function(req, res){
    res.sendFile(path.join(__dirname, 'elektronik.html'))
    console.log("elektronik module call");
}

module.exports.bilgisayar=function(req, res){
    res.sendFile(path.join(__dirname,'bilgisayar.html'))
    console.log("bilgisayar module call");
}