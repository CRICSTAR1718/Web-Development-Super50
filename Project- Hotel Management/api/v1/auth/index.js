import {loginController, signupController} from "./auth.controller"
const { Router } = require("express");

const authRouter = Router();

authRouter.use("/signup", validateSignup, signupController);

authRouter.use("/login", loginController);

module.exports = { authRouter };