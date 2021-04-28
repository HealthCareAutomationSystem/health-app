var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	cookieParser = require('cookie-parser'),
	mongoose = require ('mongoose'),
	mongoose = require('mongoose');

const path = require("path");

require("./db/conn");
const Register = require("./models/registers")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


// app.use(bodyParser.json());

//mongo retreiving data
let schema = new mongoose.Schema({
    Name:String,
    Address:String
});
let storeschema=mongoose.model('Stores',schema,'stores');
let query = "mongodb+srv://chhariavikram1:vikram1234@healthcare.dcpke.mongodb.net/test"
mongoose.connect(query,{useNewUrlParser:true, useFindAndModify:false, useUnifiedTopology:true})

app.get('/orderMedecine', async(req,res)=>{
	storeschema.find({}, function(err, stores) {
	renderResult(res, stores);
});});

function renderResult(res, stores) {
	res.render('orderMedecine', {Stores:stores},
	  function(err, result) {
		if (!err) {res.end(result);}
		else {res.end('Oops ! An error occurred.');
		  console.log(err);}
	});
}

app.get('/orderMedecine/:id', function(req, res){
	storeschema.findById(req.params.id).exec(function(err, foundstore){
		if(err){
			console.log(err);
		}else{
			console.log(foundstore);
			res.render('order', {stores: foundstore});
		}
	});
});

app.get('/appointments', function(req, res){
	res.render('appointments');
});

app.get('/admin', function(req, res){
	res.render('admin');
});

app.get('/home', function(req, res){
	res.render('home');
});

// login and register function

app.get("/register", (req, res) => {
	res.render("register"); 
 })
 
 app.get("/", (req, res) => {
	 res.render("login"); 
  })
 
 //create a new user in our database
 app.post("/registers", async(req, res) => {
	 try{
		 const registeruser = new Register({
			 email: req.body.email,
			 password: req.body.password
		 });
		 const registered = await registeruser.save();
		 res.status(201).render("home");
	 } catch (status){
		 res.send(400).send(error);
	 }
  })
 
 //  login validation
 app.post("/login", async(req, res) => {
	 try{
		 const email = req.body.email;
		 const password = req.body.password;
 
		 const useremail = await Register.findOne({email: email});
		 if(useremail.password === password){
			 res.status(201).render("home");
		 }else{
			 res.send('invalid login details');
		 }
	 }catch(error){
		 res.status(400).send("invalid email");
	 }
  })

app.listen(3000, function(){
	console.log('healthcareautomationsystem started!');
});