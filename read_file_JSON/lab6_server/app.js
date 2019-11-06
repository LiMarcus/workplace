var express = require('express');
var app = express();
var fs = require("fs");
var ruby = fs.readFileSync("ruby.json");
var javascript = fs.readFileSync("javascript.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  if(req.query.job==='javascript') {
    res.send(javascript);
  } else if(req.query.job==='ruby') {
    res.send(ruby);
  } else {
    res.send('[]');
  }
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
