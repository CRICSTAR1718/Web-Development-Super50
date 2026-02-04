const printYes=()=>{
    console.log("Yes")
};

const printNo=()=>{
    console.log("No")
};

const sum=(a,b,cb) =>{
    const ans=a+b;
    cb(ans);
};
console.log(10, 5, printYes);