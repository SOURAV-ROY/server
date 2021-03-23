const asyncHandler = require('../middleware/async');
const Contact = require("../models/ContactModel")

// @description     Get All Contacts
// @route           GET /api/v1/contacts
exports.getContact = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

// @description     Post A Single Contact
// @route           POST /api/v1/contacts
exports.createContact = asyncHandler(async (req, res, next) => {

    const contact = await Contact.create(req.body);

    res.status(201).json({
        success: true,
        data: contact
    });
});
