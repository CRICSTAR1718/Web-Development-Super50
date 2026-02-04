// const printYes=()=>{
//     console.log("Yes")
// };

// const printNo=()=>{
//     console.log("No")
// };

// const sum=(a,b,cb) =>{
//     const ans=a+b;
//     cb(ans);
// };
// sum(10, 5, printYes);

// console.log("----------------------------START----------------------------");
// const printYes=()=>{
//     console.log("Yes")
// };
// const printNo=()=>{
//     console.log("No")
// };

// const sum=(a,b,cb) =>{
//     console.log("-------------------Inside SUM--------------------");
//     const ans=a+b;
//     window.setTimeout(printNo,1000);
//     cb(ans);
//     console.log("-------------SUM is about to complete--------------------");
// };
// sum(10, 5, printYes);
// console.log("----------------------------END----------------------------");

console.log("----------------------------START----------------------------");
const printYes=()=>{
    console.log("Yes")
};
const printNo=()=>{
    console.log("No")
};

const sum=(a,b,cb) =>{
    console.log("-------------------Inside SUM--------------------");
    const ans=a+b;
    window.setTimeout(printNo,);
    cb(ans);
    console.log("-------------SUM is about to complete--------------------");
};
sum(10, 5, printYes);
console.log("----------------------------END----------------------------");