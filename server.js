var express = require('express');
var app = express();
console.log("Hello world")
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/brandmore");
var productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  fabric: String,
  fit: String,
  description: String,
  image: String
});
var Product = mongoose.model("Product", productSchema);

var product = new Product({
  name: "Tees",
  price: 999,
  fabric: "lorem ipsum",
  fit: "regular",
  description: "lorem ipsum",
  image: "#"
});
product.save(function(err, product){
  if(err){
    console.log("Seomthing went wrong!");
  } else {
    console.log(product);
  }
  }
);



app.get('/', function(req, res){
    res.render("index.ejs");
});
app.get('/collections/:id', function(req, res){
    res.render("content.ejs", {data:req.body});
});
app.listen(5000, function(){
  console.log("listening on port 5000")
});
