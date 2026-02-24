console.log("START");
const fs = require("fs");

const readFileText = () => {
    const data = fs.readFileSync("./data.txt", "utf-8");
};

const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    readFileText();
    const endTime = performance.now();
    console.log(i, "---------->", endTime-startTime);
    
}

const endTime = performance.now();
console.log("END------------->", endTime-startTime);
