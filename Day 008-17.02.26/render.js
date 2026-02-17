// console.log("RENDER START");

// const render = () => {
//     const data = require("./data.js");
//     console.log("--------->", data);
// };
// console.log("RENDER END");

// module.exports = render;


// console.log("2");

// const render = () => {
//     const data = require("./data.js");
//     console.log("--------->", data);
// };
// console.log("5");

// module.exports = render;


console.log("2");

const data = require("./data.js");
const fs = require("fs");
const render = () => {
    // console.log("--------->", data);
    fs.writeFileSync("output.html", data);
};
console.log("5");

module.exports = render;
