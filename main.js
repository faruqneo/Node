const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Init app
const app = express();

//Crate connetion
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//Check connection
db.once('open',function(){
	console.log('Connected to mongodb');
});


//check connection error
db.on('error',function(){
	console.log(error);
});

//Connected with model
let Dummy = require('./model/dummy');

//Connected with view page
app.set('views',path.join(__dirname,'view'));
app.set('view engine','pug');



app.get('/',function(req, res){
    Dummy.find({},function(err, dummy){
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.render('table',{
				dummy: dummy
            });		
            // res.send(dummy);	
		}
    });
});


app.listen(3000,function(){
    console.log('server is started');
});
