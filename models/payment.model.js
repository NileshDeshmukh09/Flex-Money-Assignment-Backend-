/**
* Schema for the Batch  Model will be provided Here
*/

const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },

    amount : {
        type : Number,
        required : true
    },

});

/* These will automatically generates the created and updated fields */
paymentSchema.set('timestamps' , true);



module.exports = mongoose.model("Payment", paymentSchema);


