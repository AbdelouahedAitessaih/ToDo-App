const express = require('express');
const dotenv = require('dotenv');

const {middleware} = require("./middlewares");

const createError = require('http-errors');

const routes = require('./routes');
const app = express();

dotenv.config();

//db
require('./config/db');

//middleware
middleware(app);

//routes
routes(app);

app.use(
    (req, res, next) => {
        const error = createError(404);
        next(error);
    });

app.use(
    (err, req, res, next) => {
        res.statusCode = err.statusCode || 500;
        res.json({
            message: err.message
        });
    });

app.listen(process.env.PORT, () => {
    console.log("Server is started at " + process.env.PORT);
})
