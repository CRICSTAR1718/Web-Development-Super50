const getTotalPrice = (data) => {
    const { products } = data;

    const totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
    });

    return totalPrice;
};

const getProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("---> Error:", err.message);
    }
};

const main = async () => {
    const data= await getProducts();
    const totalPrice=getTotalPrice();

    console.log("Total Price: ", totalPrice);
};

main();