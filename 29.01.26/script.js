// EVENTS
// const handleRoot=()=>{
//     console.log("Root Click");
// }
// const handleParent=()=>{
//     console.log("Parent Click");
// }
// const handleChild=()=>{
//     console.log("Child Click");
// }
// ---------------------------------------------------------------------
// const handleChild=(p)=>{
//     console.log("Child Click", p);
// }
// ----------------------------------------------------------------------
const handleRoot=(ev)=>{
    console.log("Root Click");
    console.log(ev, ev.target);
}
const handleParent=(ev)=>{
    console.log("Parent Click");
    console.log(ev, ev.target);
}
const handleChild=(ev)=>{
    console.log("Child Click");
    console.log(ev, ev.target);
}
//-----------------------------------------------------------------------
// // dataType nameOfElement=document.getElementById("id of product");
const rootElement=document.getElementById("root");
const parentElement=document.getElementById("parent");
const childElement=document.getElementById("child");
// // element.addEventListener("event type", function);
// childElement.addEventListener("click",handleChild);
// parentElement.addEventListener("click",handleParent);
// rootElement.addEventListener("click",handleRoot);
// ----------------------------------------------------------------------
// element.addEventListener("event type", function, true)=>function executed in capturing phase 
// element.addEventListener("event type", function, false)=>function executed in bubbling phase 
childElement.addEventListener("click",handleChild,true);
parentElement.addEventListener("click",handleParent,false);
rootElement.addEventListener("click",handleRoot,true);
// ----------------------------------------------------------------------
