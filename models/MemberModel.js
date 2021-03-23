const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Add A Name Please"]
    },
    description: {
        type: String,
        required: [true, "Please Add Some description"]
    },
    email: {
        type: String,
        required: [true, "Please Add A An email"],
        unique: true,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            "Please add a valid email"
        ]
    },
    role: {
        type: String,
        enum: ['user', 'publisher'],
        default: 'user',
    }
}, {collection: 'member'})

module.exports = mongoose.model('Member', MemberSchema);
