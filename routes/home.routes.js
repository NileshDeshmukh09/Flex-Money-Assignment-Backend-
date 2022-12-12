
/**
 *  The routes for the User 
 *  Resource
 */

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");

 
 
 /** Enroll user -- GET */
router.get("/" , homeController.home)
 

module.exports = router