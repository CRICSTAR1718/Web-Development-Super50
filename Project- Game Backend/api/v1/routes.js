const express = require("express");

const v1Router = express.Router();
v1Router.post("/players", (req, res) => {
    console.log("Hi");
    res, json({
        success: "pending",
    });
});

module.exports = { v1Router };