const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Connect Database
mongoose.connect('mongodb://localhost/nodekb');
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
let Article = require('./models/article');

//Init App
const app = express();

//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Body parser Middelware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//setup public folder
app.use(express.static(path.join(__dirname,'public')));


//Home Route
app.get('/',function(req, res){
	res.render('index',{
/*		title:"Articles",
		name:"Faruq"*/
	});
});


//Add Articles
app.get('/articles/add',function(req, res){
	res.render('add_articles',{
		title:"add_articles",
		name:"Route"
	});
});

//Add Rought POST
app.post('/articles/add',function(req, res){
	let article = new Article();
	article.title = req.body.title;
	article.author = req.body.author;

	article.save(function(err){
		if(err){
			console.log(err);
		}
		else
		{
			res.redirect('/');
		}
	});
});

//Add Articles with mongodb value
app.get('/articles/add/mongodb',function(req, res){
	Article.find({},function(err, articles){
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.render('mongodb_articles',{
				articles: articles
			});			
		}
	});
});


//Add Articles with static array
app.get('/articles/add/array',function(req, res){
	let articles = 
	[{
			id:1,
			name:"faruq",
			branch:"CSE"
		},
		{
			id:2,
			name:"prakash",
			branch:"ME"
		},
		{
			id:3,
			name:"raman",
			branch:"EEE"
	}];

	res.render('add_articles',{
		articles: articles
	});
});


//Start server
app.listen(3000,function(){
	console.log('server is started.....');
});