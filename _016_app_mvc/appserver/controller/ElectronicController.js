var path = require('path');

module.exports.electronic=function(req, res){
    res.sendFile(path.join(__dirname, '../../electronic.html'))
    console.log("electronic module invoked");
}

module.exports.computer=function(req, res){
    res.sendFile(path.join(__dirname,'../../computer.html'))
    console.log("computer module invoked");
}
