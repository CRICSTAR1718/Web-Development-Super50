const { Router } = require("express");
const { createHotelController, updateHotelController, getHotelByIdController,deleteHotelController} = require("./hotels.controller.js");
const { validateCreateHotelDto } = require("./dto/validateCreateHotelDto.js");
const { validateUpdateHotelDto } = require("./dto/validateUpdateHotelDto.js");
const { validateDeleteHotelDto } = require("./dto/validateDeleteHotelDto.js");
const { validateGetHotelDto } = require("./dto/validateGetHotelDto.js");
const hotelsRouter = Router();

hotelsRouter.post("/", validateCreateHotelDto, createHotelController);
hotelsRouter.patch("/:hotelId", validateUpdateHotelDto, updateHotelController);
hotelsRouter.get("/:hotelId", validateGetHotelDto, getHotelByIdController);
hotelsRouter.delete("/:hotelId", validateDeleteHotelDto, deleteHotelController);

module.exports = { hotelsRouter };
