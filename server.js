var express = require('express');
var app = express();
var mongo = require('mongojs');
var db = mongo('contactlist', ['contactlist']);


app.use(express.static(__dirname + '/public'));
app.get('/contactlist', function(req, res){
    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.listen(3000);
console.log("server running on port 3000");



