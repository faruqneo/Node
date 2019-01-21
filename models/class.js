let mongoose = require('mongoose');

let classSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	branch:{
		type: String,
		required: true
	}
});

let Class = module.exports = mongoose.model('Class',classSchema);