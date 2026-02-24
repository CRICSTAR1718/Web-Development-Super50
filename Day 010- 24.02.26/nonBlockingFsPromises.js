console.log("START");
const fsPromises = require("fs/promises");

const readFileText = async (i) => {
    try {
        const data = await fsPromises.readFile("./data.txt", "utf-8");
        const endTime = performance.now();
        console.log(i, "---------->", endTime - startTime);
        }catch(err)
        {
            console.log("File Loading Error", err.message);
        }
};

const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    readFileText(i);
}


const endTime = performance.now();
console.log("END------------->", endTime - startTime);
