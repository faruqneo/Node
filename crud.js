const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Init App
const app = express();

//Connect Database
mongoose.connect('mongodb://localhost/curd');
let db = mongoose.connection;

//check connection
db.once('open',function(){
	console.log('Connected to mongodb');
});

//check connection error
db.on('error',function(){
	console.log(error);
});


//Connected with model
let Class = require('./models/class');


//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Body parser Middelware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/',function(req, res){
	res.render('form');
});

app.post('/',function(req, res){
	let blass = new Class();
	blass.name = req.body.name;
	blass.branch = req.body.branch;

	blass.save(function(err){
		if(err){
			console.log(err);
		}
		else
		{
			res.render('form',{
			name: blass.name,
			branch: blass.branch
			});	
		}
	});
});

app.listen(3000, function(){
	console.log('server is running');
});