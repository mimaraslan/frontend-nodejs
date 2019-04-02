module.exports.electronic=function(req, res){
    console.log(req.myMessage)
    res.render('electronic');
    console.log("electronic module invoked");
}

module.exports.computer=function(req, res){
    //case 1
    //res.render('computer',  {myMessageHello:"Hello ElektronikController"});

    //case 2
    var brands = ['Asus', 'HP', 'Acer','Casper'];
    res.render('computer',  {myMessageHello:"Hello ElektronikController", products: brands});

    console.log("computer module invoked");
}
