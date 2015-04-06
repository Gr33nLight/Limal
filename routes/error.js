/**
 * Created by Bruno on 4/6/2015.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var id = "node@node";
var pw = "node";

router.get("/", function (req, resp) {
    resp.render('error', {message: "Erorre di login"});
});
module.exports = router;