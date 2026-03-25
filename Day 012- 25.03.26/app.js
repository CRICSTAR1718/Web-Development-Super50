const express = require("express");
const mongoose = require("mongoose");
// const { Schema } = mongoose;
const app = express();
mongoose.connect("mongodb+srv://Adeela:Adeela1609@cluster0.akwko7c.mongodb.net/?appName=Cluster0", {
    dbName: "super50",
}).then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
    console.log("Error in DB Connection", err.message);
});

const movieSchema= new mongoose.Schema({
    title: String,
    rating: Number,
    releaseYear: Number,
    description: String,
});

const Movies = mongoose.model("Movie", movieSchema);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.post("/movies", async (req, res) => {
    const result= await Movies.insertOne({
        title: "ABC",
        rating: 5,
        releaseYear: 2017,
        description: "XYZ"
    });
    console.log("result: ", result);
    res.json(result);
});
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
