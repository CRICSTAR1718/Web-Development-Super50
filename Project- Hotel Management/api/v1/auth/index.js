const { Router } = require("express");
const { signupController, loginController } = require("./auth.controller.js");
const { validateSignup, validateLogin } = require("./auth.middleware.js");

const authRouter = Router();

authRouter.post("/signup", validateSignup, signupController);

authRouter.post("/login", validateLogin, loginController);

module.exports = { authRouter };