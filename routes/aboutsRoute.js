const express = require('express');

const {
    getAbout,
} = require('../controllers/aboutController');

const About = require("../models/AboutModel");

//Protect Middleware *******************************************
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");

router
    .route('/')
    .get(advancedResults(About), getAbout)

module.exports = router;
