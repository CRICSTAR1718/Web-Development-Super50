const express = require("express");
const mongoose = require("mongoose");
const app = express();
// mongoose.connect("mongodb+srv://Adeela:Adeela1609@cluster0.akwko7c.mongodb.net/?appName=Cluster0", {
//     dbName: "SUPER 50",
// }).then(() => {
//         console.log("Connected to DB");
//     })
//     .catch((err) => {
//     console.log("Error in DB Connection", err.message);
//     });
// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });


app.get("/", (req, res) => {
    console.log("/ route hit")
    res.send("HELLO WORLD");
});
app.get("/users", (req, res) => {
    console.log("/users route hit")
    res.send("HELLO USERS");
});


app.listen(3000, () => {
    console.log("<----------------Server is running-------------------->")
});
