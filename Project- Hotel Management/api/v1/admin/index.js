const { Router } = require("express");
const { hotelsRouter } = require("./hotels");
const { validateUser}=require("../../../middlewares/authHandler")

const adminRouter = Router();

adminRouter.use("/hotels", validateUser, hotelsRouter);

// TODO:
// adminRouter.use("/rooms", roomsRouter);

module.exports = { adminRouter };
