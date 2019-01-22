const express = require('express');
const path = require('path');
const parseJson = require('parse-json');
const str2json = require('string-to-json');

//Init App
const app = express();


//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');



app.get('/',function(req, res){
let data = [
{
	"name": "faruq",
	"branch": "cse"
},{
	"name": "prakash",
	"branch": "eee"
},{
	"name": "raman",
	"branch": "mca"
}];
	/*console.log(parseJson(JSON.stringify(data)));*/
	res.send(JSON.stringify(data));
});



app.listen(3000, function(){
	console.log('server is running');
});