const express = require('express');
const path = require('path');
const request = require('request');
/*const hbs = require('handlebars')*/

//Init App
const app = express();


//Load View Engine
/*app.engine('hbs',hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));*/
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

const url = "https://fcc-weather-api.glitch.me/api/current?lat=20.360451&lon=85.8246128";

app.get('/',function(req, res){
	request({
		url: url,
		json: true
	},function(err, resp, body){
		    if (!err && resp.statusCode === 200) {
	        /*console.log(body.main.temp)*/ 
	  //       res.render('data',{
			// 	value: JSON.stringify(body)
			// });
			res.send(JSON.stringify(body));
	    }else
	    {
	    	console.log(err);
	    }

	});
	
});



app.listen(3000, function(){
	console.log('Server is running.');
});