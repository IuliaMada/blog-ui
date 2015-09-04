//var express = require('express');
//var app = express();
//
//app.use(express.static(__dirname));
//
//var server = app.listen(3334);


var express = require('express');
//var request = require('request');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.use('/api', function( req, res ) {
    var url = 'http://localhost:3000/'+ req.url;
    //var r = null;
    //if ( req.method === 'POST' ) {
    //    r = request.post( { uri: url, json: req.body } );
    //} else if ( req.method === 'PATCH' ) {
    //    r = request.patch( { uri: url, json: req.body } );
    //}
    //else {
    //    r = request(url);
    //}
    //
    //req.pipe(r).pipe(res);
});

var server = app.listen(3334);
