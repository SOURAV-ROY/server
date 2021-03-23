const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please Add A An email"],
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please add a valid email"
        ]
    },
    subject: {
        type: String,
        required: [true, "Please Add Subject"]
    },
    description: {
        type: String,
        required: [true, "Please Add Some description"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {collection: 'contact'})

module.exports = mongoose.model('Contact', ContactSchema);
