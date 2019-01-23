let mongoose = require('mongoose');

//Dummy schema
let dummySchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    ip_address:{
        type: String,
        require: true
    }
});

// If you are using mongoose 2.0.0, pass the collectionName as the third argument
const Dummy = module.exports = mongoose.model('Dummy',dummySchema, 'dummy');