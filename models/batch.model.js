/**
* Schema for the Batch  Model will be provided Here
*/

const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({

    time: {
        type: String,
        required: true
    },

    participants: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "User" /* Collection Name */
        /* One to Many Relationship between the Batch's and the User */
    },

});

/* These will automatically generates the created and updated fields */
batchSchema.set('timestamps' , true);



module.exports = mongoose.model("Batch", batchSchema);


