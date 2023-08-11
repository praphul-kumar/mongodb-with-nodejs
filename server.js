const express = require('express');

// MongoDB driver
const mongoose = require('mongoose');

/**
 * Morgan is an HTTP request level Middleware. 
 * It is a great tool that logs the requests along with some other information depending upon its configuration and the preset used.
 *  It proves to be very helpful while debugging and also if you want to create Log files.
 */
const morgan = require('morgan');

// HTTP request body parser
const bodyParser = require('body-parser');

const EmployeeRoute = require('./routes/employee');


// Creating connection to mongodb on localhost
mongoose.connect(
    'mongodb://localhost:27017/learn_mongodb_with_nodejs', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

// If any error occures during connectivity it will be handled here.
db.on('error', (err) => {
    console.log(err);
});

// Once the connection will be established this will be called.
db.once('open', () => {
    console.log('Database Connection Established!');
});

// creating express instance
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/employee', EmployeeRoute);