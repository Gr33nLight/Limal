var express = require('express');
var router = express.Router();
var fs = require('fs');
var id = "node@node";
var pw = "node";

//var jsdom = require("jsdom");
//function update(){
//    jsdom.env({
//        url: "http://93.37.193.179:3000/",
//        scripts: ["http://code.jquery.com/jquery.js"],
//        done: function (errors, window) {
//            var $ = window.$;
//            console.log("ciao");
//            $("body").text();
//        }
//    });
//}


router.get('/', function (req, res) {
    res.render('index', {success: true});
});

//router.post('/checkLogin', function (req, res){
//    console.log(req);
//    if (req.body.id == id && req.body.pass == pw) {
//        res.send({ "success": true});
//    }else
//        res.send({ "success": false});
//});

router.post('/logged', function (req, res) {
    //jsdom.env("index.hjs",["http://code.jquery.com/jquery-1.6.min.js"],function(err, window){
    //    //Use jQuery just as in a regular HTML page
    //    var $ =window.$;
    //    $("document").ready(function(){
    //        console.log($("#test").text("prova"));
    //    });
    //
    //});
    //var out="\nUser: "+req.body.id+"\n"+"Pass: "+req.body.pass+"\n";
    if (req.body.id == id && req.body.pass == pw) {
        console.log("GRANTED");
        res.redirect('logged');
        fs.appendFile('message.txt', "Login successful by " + id + " IP[" + req.connection.remoteAddress + "]" + "\n", function (err) {
            if (err) throw err;
        });
    } else {
        res.render('index',{success: false});
    }
});


module.exports = router;