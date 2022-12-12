
/**
 *  The routes for the User 
 *  Resource
 */

const express = require("express");
const router = express.Router();
 const userController = require("../controllers/user.controller");

 
 
 /** Enroll user -- GET */
router.post("/enroll" , userController.registerUser)
 

module.exports = router