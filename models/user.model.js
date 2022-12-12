/**
* Schema for the user Model will be provided Here
*/

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
 
    name: {
        type: String,
        required: true
    },

    age : {
        type : Number,
        required : true , 
        min : 18,
        max : 65,
    },
  
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 10,
        unqiue: true
    },

    number : {
        type : Number ,
        required : true,
        unique : true,
        maxLength : 10
    },

    batch : {
        type : String , 
        required : true,
    },

    payment : {
        type : Number,
        required : true 
    }

});

/* These will automatically generates the created and updated fields */
userSchema.set('timestamps' , true);



module.exports = mongoose.model("User", userSchema);


