
const mongoose = require('mongoose');

const cardPaypostSchema = new mongoose.Schema({

    cardnumber : {
        type:Number,
        required:true
    },


    customerName :{
        type:String,
        required: true
    },

    expiry :{
        type:Date,
        required: true
    },

    cvc :{
        type: Number ,
        required: true
    },

   
   
});


module.exports = mongoose.model('Card_Payment',cardPaypostSchema);


