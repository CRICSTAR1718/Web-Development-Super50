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

// const movieSchema= new mongoose.Schema({
//     title: String,
//     rating: Number,
//     releaseYear: Number,
//     description: String,
// });

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required:[true, "Rating should be between 1 and 10"]
    },
    releaseYear: {
        type: Number,
        default: 2000,
    },
    description: String,
    origin: {
        type: String,
        enum: ["Bollywood", "Hollywood", "Online Platform"],
    }
});

const Movies = mongoose.model("Movie", movieSchema);

// middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.json());

// app.post("/movies", async (req, res) => {
//     const result= await Movies.insertOne({
//         title: "ABC",
//         rating: 5,
//         releaseYear: 2017,
//         description: "XYZ"
//     });
//     console.log("result: ", result);
//     res.json(result);
// });

// app.post("/movies", async (req, res) => {
//     try {
//         const result = await Movies.insertOne({
//             title: "Dhurandar",
//             rating: 5,
//             releaseYear: 2024,
//             description: "XYyyyyZ"
//         });
//         console.log("result: ", result);
//         res.json({
//             success: true,
//             message: "Movie inserted",
//             data: {
//                 movie: result,
//             },
//         });
//     }
//     catch(err)
//     {
//         console.log("Error in POST movies: ", err.message);
//         res.status(500);
//         res.json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// });

app.post("/movies", async (req, res) => {
    try {
        const movieData = req.body;
        const result = await Movies.insertOne(movieData);
        console.log("result: ", result);
        res.json({
            success: true,
            message: "Movie inserted",
            data: {
                movie: result,
            },
        });
    }
    catch (err) {
        console.log("Error in POST movies: ", err.message);
        res.status(500);
        res.json({
            success: false,
            message: "Internal Server Error"
        });
    }
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

