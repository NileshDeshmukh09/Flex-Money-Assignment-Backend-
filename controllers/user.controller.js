/**
 * This file will have all the logic to manipulate the User resource 
*/

const User = require("../models/user.model");
const Payment = require("../models/payment.model");
const Batch = require("../models/batch.model");


async function registerUser( req , res ){
 
    const userData = {
        name : req.body.name,
        age  : req.body.age,
        email : req.body.email,
        number : req.body.number,
        batch : req.body.batch,
        payment : req.body.payment
    }

    try{

        const user = await User.create( userData );
        
        console.log( user );
        
        const batch = await Batch.create({ time : user.batch } );
        batch.participants.push( user._id );

        await batch.save();
        console.log( batch );
        
        const payment = await Payment.create({ userID : user._id , amount : user.payment })
        console.log( payment );
        
        
         /**
         *  response
         */
         const ResponseOfNewUser = {
            _id : user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            contact : user.number,
            batch : user.batch,
            payment : user.payment,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }

        res.status(201).send({
            success : true,
            message: `${user.name} , Enrolled Successully !`,
            user: ResponseOfNewUser
        });
    } catch (err) {

        console.log( err);
        res.status(500).send({
            message: "Internal Server Error ,when Insert User !"
        })
    }
}

module.exports = {
    registerUser
}
