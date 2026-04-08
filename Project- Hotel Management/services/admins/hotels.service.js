const { Hotel } = require("../../models/hotelSchema");

const createHotelService = async (data) => {
    const newHotel = await Hotel.insertOne(data);
    return newHotel;
};

const updateHotelService = async ({ hotelId, dataToUpdate }) => {
    const newHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
        new: true, // new default is false
        upsert: false, // upsert default is false
    });
    return newHotel;
};

const getHotelByIdService = async (hotelId) => {
    const newHotel = await Hotel.findById(hotelId);
    return newHotel;
};

const deleteHotelByIdService = async (hotelId) => {
    const deleted = await Hotel.findByIdAndDelete(hotelId);
    if (!deleted) {
        throw new Error("Hotel not found");
    }
    return deleted;
};

module.exports = { createHotelService, updateHotelService, getHotelByIdService, deleteHotelByIdService};
