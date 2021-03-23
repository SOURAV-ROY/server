const express = require('express');

const {
    getContact,
    createContact
} = require('../controllers/contactController');

const Contact = require("../models/ContactModel");

//Protect Middleware *******************************************
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");

router
    .route('/')
    .get(advancedResults(Contact), getContact)
    .post(createContact)

module.exports = router;
