console.log("START");
const fs = require("fs");

const readFileText = (i) => {
    const data = fs.readFile("./data.txt", "utf-8", (err, data) => {
        if (err)
        {
            console.log("File Loading Error", err.message);
        }
        else {
            const endTime = performance.now();
            console.log(i, "---------->", endTime - startTime);
        }
    });
};

const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    readFileText(i);
}


const endTime = performance.now();
console.log("END------------->", endTime - startTime);
