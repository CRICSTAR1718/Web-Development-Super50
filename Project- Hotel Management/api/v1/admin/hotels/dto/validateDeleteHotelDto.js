const validateDeleteHotelDto = async (req, res, next) => {
    try {
        const { hotelId } = req.params;
        // const hotelId = req.params.hotelId;
        if (!hotelId) {
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

module.exports = { validateDeleteHotelDto };
