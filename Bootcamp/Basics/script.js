const root = document.getElementById("root");
// root.innerHTML = `
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ul>
// `;

async function getData() {
    const res= await fetch("https://dummyjson.com/products");
    // const resp = fetch("https://api.github.com/users/");
    const data= await res.json();
    console.log(data);
}
getData();