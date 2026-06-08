const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGODB_URL, {
    dbName: "game-database",    
    }).then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
    console.log("Error in DB Connection", err.message);
});