const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Please Add A Course title"]
    },
    description: {
        type: String,
        required: [true, "Please Add A Description"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {collection: 'about'});

module.exports = mongoose.model('About', AboutSchema);
