console.log("A");

const getData = async () => {
    console.log("B");
    try {
        console.log("C");
        const response = await fetch("https://dummyjson.com/products");
        console.log("D");
        const data = await response.json();
        // console.log(data);
        console.log("E");
    }
    catch (err) {
        console.log("Error", err.message)
    }
};
console.log("F");
getData();
console.log("G");