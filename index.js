var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/health', function(req, res){
   res.send("Application is healthy");
});

app.listen(3000);