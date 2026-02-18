const fs = require("fs");
// Read index.html
function getIndexFile() {
    return fs.readFileSync("index.html", "utf8");
}
// Fetch products from API
async function getProducts() {
    const response =await fetch(
        "https://dummyjson.com/products?select=id,title,price,thumbnail"
    );
    const data =await response.json();
    return data.products;
}
// Card template (ONLY card markup)
function createCard(product) {
    return `
    <div class="card">
        <div>
            <img src="${product.thumbnail}" />
        </div>
        <div>
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
        </div>
    </div>
`;
}
module.exports = {
    getIndexFile,
    getProducts,
    createCard
};
