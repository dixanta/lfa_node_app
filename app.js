var express=require('express');
var path=require("path");


var app=express();

var port=9090;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"bower_components")));

app.get("/",function(req,res){
	res.render('index',{
		title:'Node App',
		message:'Welcome to Node JS Application'
	});
});

app.get("/edit/:id",function(req,res){
	res.render("edit",{
		title:'Node App',
		id:req.params.id
	});
});

app.listen(port,function(){
	console.log("Server is listening at "+ port);
});