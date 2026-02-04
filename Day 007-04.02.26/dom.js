// console.log(window); //BOM
// // console.log(document);
// console.dir(document); 

// getElementById
// getElementsByClassName
// querySelector
// querySelectorAll
// const rootElement=document.getElementById("root");
// console.log("rootElement: ",rootElement);
// rootElement.innerHTML="<h1>Hello</h1>";
// rootElement.style.backgroundColor="red";
// rootElement.style.padding="16px";


// WE DO NOT USE INNER HTML BECAUSE HACKERS MAY INJECT CODE USING SQL INJECTION
// ----------------------------------------------------------------------------------------
// const rootElement=document.getElementById("root");
// const title=document.createElement("h1");
// title.innerText="Hello";
// title.className="text-type-1";
// rootElement.append(title);
// ----------------------------------------------------------------------------------------
// const obj={
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s",
//     name: "Adeela",
//     batch: "CSE-E",
//     college: "KRMU"
// };
// const rootElement=document.getElementById("root");
// const imageU=document.createElement("img");
// imageU.src=obj.imageUrl;
// rootElement.appendChild(imageU);
// const div2=document.createElement("div");
// rootElement.appendChild(div2);
// const heading2=document.createElement("h2");
// const p1=document.createElement("p");
// const p2=document.createElement("p");
// heading2.innerText=obj.name;
// p1.innerText=obj.batch;
// p2.innerText=obj.college;
// div2.appendChild(heading2);
// div2.appendChild(p1);
// div2.appendChild(p2);

// ----------------------------------------------------------------------------------------

const obj={
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s",
    name: "Adeela",
    batch: "CSE-E",
    college: "KRMU"
};
const rootElement=document.getElementById("root");
rootElement. innerHTML= `
<img id="user-img" src='${obj.imageUrl}'>
<div>
<h2>${obj.name}</h2>
<p>${obj.batch}</p>
<p>${obj.college}</p>
</div>
`;