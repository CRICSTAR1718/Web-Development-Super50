const express = require("express");
const { Player } = require("../../models/playerSchema.js");
const v1Router = express.Router();
v1Router.post("/players", async (req, res) => {
    try {
        const data = req.body;
        const result = await Player.insertOne(data);
        res.status(201);
        res.json({
            success: true,
            data: {
                player: result,
            },
        });
    }
    catch (err) {
        console.log(err, err.name);
        console.log(err.code);

        res.status(500);
        res.json({
            success: false,
            message: err.message,
        });
    }
});


module.exports = { v1Router };