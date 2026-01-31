const time=0;
const secondElement=document.getElementById("");
const handleStart=(ev)=>{
    ev.target.style.backgroundColor="blue";
}

const handleUI=()=>{
    time+=1;
    secondElement.innerText=time;
}