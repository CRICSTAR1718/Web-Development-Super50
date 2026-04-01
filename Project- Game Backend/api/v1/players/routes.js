const express = require("express");
const playersRouter = express.Router();
const { createPlayerController } = require("./player.controller.js");
const { validateCreatePlayerDto }=require("../players/dto/validatePlayerDto.js")

playersRouter.post("/", validateCreatePlayerDto,createPlayerController);

module.exports = { playersRouter };