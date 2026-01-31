const rootElement=document.getElementById("root");

// const callBack=()=>{
//     rootElement.style.backgroundColor="red";
// };
// const delay=5000;  //miliseconds
// setTimeout(callBack,delay);
// const randomColor=()=>{
//     const randVal=Math.random();
//     const scalableVal=randVal*255;
//     const floorVal=Math.floor(scalableVal);
//     return floorVal;
// }
// const callBackFun = () => {
//     const red=randomColor();
//     const green=randomColor();
//     const blue=randomColor();
//     rootElement.style.backgroundColor =
//         `rgb(${red}, ${green}, ${blue})`;
// };

// const randomHexDigit = () => {
//     const hex = "0123456789ABCDEF";
//     const index = Math.floor(Math.random() * 16);
//     return hex[index];
// };
// const randomHexColor = () => {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += randomHexDigit();
//     }
//     return color;
// };
// const callBackFun = () => {
//     rootElement.style.backgroundColor = randomHexColor();
// };


// window.setInterval(callBackFun, 1000);