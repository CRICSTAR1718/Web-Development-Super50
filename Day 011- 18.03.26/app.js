const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
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
