const mongoose = require('mongoose');

const ShipingSchema= new mongoose.Schema({
    product:{
        name:{
            type:String,
            required: [true, 'Please add a name product'],
        },
        id:{
            type:String,
            required: [true, 'Please add a id product'],
        }
    },
    buyer:{
        addres:{
            type: String,
            required: [true, 'Please add a addres'],
        },
        phone:{
            type:Number,
            required:[false],
            minlength:15
        },
        email:{
            type: String,
            required: [true, 'Please add a email'],
            unique: true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please add a valid email address'
            ]
        }
    },
    cancelled: {
        type: Boolean,
        default:false
    },
    delivered:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model('Shiping', ShipingSchema);