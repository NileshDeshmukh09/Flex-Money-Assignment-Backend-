const express =require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


/**
 * Setup the mongodb connection 
 */
// console.log(process.env.DB_URL);
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, (err)=>{

    if( err ){
        console.log(err);
        throw err;
    }
    
    console.log("MongoDB connected ");
});

const userRoutes = require('./routes/user.routes');
const homeRoute = require('./routes/home.routes');

app.use( '/flexmoney/api/v1' , userRoutes );
app.use(  homeRoute );


app.listen(process.env.PORT, () => {
    console.log(`Backend-Server has started on the port http://localhost:${process.env.PORT}` );
})