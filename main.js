const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


//Init app
const app = express();

//Crate connetion
mongoose.connect('mongodb://localhost/nodekb',{ useNewUrlParser: true } );
let db = mongoose.connection;

//Check connection
db.once('open',function(){
	console.log('Connected to mongodb');
});

//check connection error
db.on('error',function(){
	console.log(error);
});

// Body parser Middelware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Connected with model
let Dummy = require('./model/dummy');

//Connected with view page
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

let dumlen = 0;
let count = 0;

app.post('/getdata',function(req, res){
console.log(req.body.offset);
    Dummy.find({},function(err, dummy){
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.send(dummy);		
			dumlen = dummy.length;
		}
    }).sort({id: 1}).limit(10).skip(count);
});

app.get('/getdata',function(req, res){
	res.send('Restricted ');
});


app.get('/',function(req, res){
	res.render('table',{
		dummy: dumlen,
		offset: count
	});		
	// res.send(dummy);	
});


app.listen(3000,function(){
    console.log('server is started');
});
