/**
 * This file will have all the logic to manipulate the User resource 
*/

const User = require("../models/user.model");
const Payment = require("../models/payment.model");
const Batch = require("../models/batch.model");

async function home( req , res){
    return res.status(201).send({
        success : true,
        message: `Welcome to Backend Server of Flex-Money-Assignment !`,
        
    });
}

module.exports = {
    home
}
