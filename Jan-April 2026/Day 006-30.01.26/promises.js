// const res=fetch("https://dummyjson.com/products");
// console.log("Results: ", res);


console.log("---------START-------------");
const successCb=()=>{
    console.log("Done...........");
}
const errorCb=()=>{
    console.log("Failure...........")
}
// const res=fetch("https://dummyjson.com/products");
const res=fetch("https://api .github.com/users/likbalpande");
console.log("---------API CALLED-------------")
res.then(successCb).catch(errorCb);



console.log("---------END-------------")
