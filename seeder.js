const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env vars *******************************************************
dotenv.config({path: "./config/config.env"});

//Load models *********************************************************
const Member = require('./models/MemberModel');
const About = require('./models/AboutModel');
const Contact = require('./models/ContactModel');


//Connect to DB *******************************************************
const optionDB = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
mongoose.connect(process.env.MONGO_URI, optionDB);

//Read JSON files ******************************************************
const members = JSON.parse(fs.readFileSync(`${__dirname}/_data/members.json`, 'utf-8'));
const about = JSON.parse(fs.readFileSync(`${__dirname}/_data/about.json`, 'utf-8'));
const contact = JSON.parse(fs.readFileSync(`${__dirname}/_data/contact.json`, 'utf-8'));


//Import into DB *******************************************************
const importData = async () => {
    try {
        await Member.create(members);
        await About.create(about);
        await Contact.create(contact);

        console.log("Data Imported.....".green.inverse);
        process.exit();
    } catch (errors) {
        console.log(errors);
    }
}

//Delete Data from DB ****************************************************
const deleteData = async () => {
    try {
        await Member.deleteMany();
        await About.deleteMany();
        await Contact.deleteMany();

        console.log("Data Destroyed.....".red.inverse);
        process.exit();
    } catch (errors) {
        console.log(errors);
    }
}

//node seeder.js *********************************************************
if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
