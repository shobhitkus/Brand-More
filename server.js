var express = require('express');
var app = express();
console.log("Hello world")
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render("index.ejs");
});
app.get('/collections/:id', function(req, res){
    res.render("content.ejs", {data:req.body});
});
app.listen(5000, function(){
  console.log("listening on port 5000")
});
