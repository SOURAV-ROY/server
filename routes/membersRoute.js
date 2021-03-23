const express = require('express');

const {
    getMembers,
} = require('../controllers/membersController');

const Member = require("../models/MemberModel");

//Protect Middleware *******************************************
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");

router
    .route('/')
    .get(advancedResults(Member), getMembers)

module.exports = router;
