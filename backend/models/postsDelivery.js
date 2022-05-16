const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    clientName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Deliveries', postSchema)