module.exports.electronic=function(req, res){
    console.log(req.myMessage)
    res.render('electronic');
    console.log("electronic module invoked");
}

module.exports.computer=function(req, res){
    res.render('computer');
    console.log("computer module invoked");
}