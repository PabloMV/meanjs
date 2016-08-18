var express = require('express');
var app = express();
var mongo = require('mongojs');
var db = mongo('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist', function(req, res){
        req.body;
        console.log(req.body);
       db.contactlist.insert(req.body, function(err, doc){
           res.json(doc);
       })
   
});

app.listen(3000);
console.log("server running on port 3000");



