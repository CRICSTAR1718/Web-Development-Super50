const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./config/database.js");

const app = express();
const PORT = process.env.PORT ?? 3000;
// console.log("-------->", process.env);

app.listen(PORT, () => {
    console.log("<-------------------Server is running------------------>")
});