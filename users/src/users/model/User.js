const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },

    email:{
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6,
    },
    rol:{
        type:String,
        default:"USER"  
    }

});

module.exports = mongoose.model('User', UserSchema);