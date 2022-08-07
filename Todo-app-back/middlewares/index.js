const express = require("express");
const cors = require("cors");
module.exports = {
    middleware : (app) => {
        app.use(express.json({extended:true}));
        app.use(express.urlencoded({extended:true}));
        app.use(cors());
    }
}