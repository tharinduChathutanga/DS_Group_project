const mongoose = require('mongoose');

const postMoileSchema = new mongoose.Schema({

    emailaddress :{
        type:String,
        required : true
    },

    pinNum :{
        type: String,
        required : true
    },

    amount : {
        type : String,
        required : true,
    },

});
module.exports = mongoose.model('Mobile_Payment',postMoileSchema);