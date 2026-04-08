const { getHotelByIdService } = require("../../../../../services/admins/hotels.service");

const validateGetHotelDto = async (req, res, next) => {
    try {
        const { hotelId } = req.params;
        // const hotelId = req.params.hotelId;
        const hotel = await getHotelByIdService(hotelId);
        if (!hotel) {
            throw new Error("Invalid Hotel Id.");
        }
        next();
    } catch (err) {
        res.status(400);
        res.json({
            success: false,
            message: err.message,
        });
        return;
    }
};


module.exports = { validateGetHotelDto };
