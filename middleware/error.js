const ErrorResponse = require("ErrorResponse");


const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message;

    //All Errors Catch AWESOME *******************************************
    console.log(err);

    //Mongoose bad ObjectID **********************************************
    console.log(err.name.red.bold);

    if (err.name === "CastError") {
        const message = 'Resource Not Found';
        error = new ErrorResponse(message, 404);
    }

    //Mongoose Duplicate Key Error ****************************************
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    //Mongoose Validation Error *******************************************
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server error"
    });
}

module.exports = errorHandler;
