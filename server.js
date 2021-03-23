const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./db/db');
const cors = require('cors');
require('colors');


// ********* Load env vars ******************************
dotenv.config({path: "./config/config.env"});

// Connect To DB ****************************************
connectDB();

const app = express();
// Body Parser ******************************************
app.use(express.json());

// Use logger Middleware *********************************
app.use(logger);
app.use(morgan('dev'));

// Enable CORS *******************************************
app.use(cors());

// Set Static Folder *************************************
app.use(express.static(path.join(__dirname, 'public')));

// Router Files ******************************************
const members = require('./routes/membersRoute');
const abouts = require('./routes/aboutsRoute');
const contacts = require('./routes/contactRoute');
// Mount Routers *****************************************
app.use('/api/v1/members', members);
app.use('/api/v1/abouts', abouts);
app.use('/api/v1/contacts', contacts);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server Running in ${PORT}`.green.bold.inverse)
})

//handle unhandled promise rejections ************************************
process.on('unhandledRejection', (error) => {
    console.log(`Error: ${error.message}`.bgRed.bold);

//  Close server and exit process *****************************************
    server.close(() => {
        process.exit(1);
    })
})
