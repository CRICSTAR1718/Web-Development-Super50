const fs = require("fs");
const {
    getIndexFile,
    getProducts,
    createCard
} = require("./helper");

async function generateFile() {
    const indexContent = getIndexFile();
    const products = await getProducts();
    let cards = "";
    products.forEach(function (product) {
        cards += createCard(product);
    });
    const finalHtml = indexContent.replace("__PLACE_HOLDER__", cards);
    fs.writeFileSync("output.html", finalHtml);
    console.log("output.html created successfully!");
}

generateFile();
