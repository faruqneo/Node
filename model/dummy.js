let mongoose = require('mongoose');

//Dummy schema
let dummySchema = mongoose.Schema({
    "id":{
        type: Number,
        require: true
    },
    "first_name":{
        type: String,
        require: true
    },
    "last_name":{
        type: String,
        require: true
    },
    "email":{
        type: String,
        require: true
    },
    "gender":{
        type: String,
        require: true
    },
    "ip_address":{
        type: String,
        require: true
    }
});

let Dummy = module.exports = mongoose.model('Dummy',dummySchema);