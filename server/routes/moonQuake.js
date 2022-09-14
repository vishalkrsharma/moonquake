const express = require("express");
const router = express.Router();

//import controllers
const {getData} =require("../controllers/quakeController");
//import middlewares

/* api routes */
// post data
router.get('/get',getData)
//router.get('/test',getTest)



module.exports = router;