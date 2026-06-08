// console.log(NaN === NaN);
// console.log(1 === 1);
// console.log("hello" === "hello");
// console.log("1" === 1);
// console.log(0 === false);

// Non-Primitive Data Types

// Object-order does not matter
// const obj1={
//     name:"Alice",
//     org:"PPA",
//     city:"Delhi"
// };
// CRUD Operations
// // Read
// console.log( "Reading the object: ");
// console.log(obj1);
// console.log("Reading key-value pair:")
// console.log(obj1["name"]);
// // Create
// console.log("Creating a new key-value pair: ");
// obj1["country"]="India";
// console.log(obj1);
// // Update
// console.log("Updating an existing key-value pair: ");
// obj1["city"]="Bangalore";
// console.log(obj1);
// // Delete
// console.log("Deleting an existing key-value pair: ");
// delete obj1["name"];
// console.log(obj1);

// const city={
//     "City Name": "Delhi"
// };
// const capitalCity={
//     "City Name": "Delhi"
// };
// if(city === capitalCity){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// const city={
//     "City Name": "Delhi"
// };
// const capitalCity=city;
// if(city === capitalCity){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// const city={
//     "City Name": "Delhi"
// };
// const capitalCity=city;
// console.log(city);
// console.log(capitalCity);
// capitalCity.population="2 CR";
// console.log("After updating capitalCity:");
// console.log(city);
// console.log(capitalCity);


// Nested Objects
const student={
    name:"Bob",
    age:20,
    city:"Noida",
    marks:{
        science:85,
        math:90
    }
};
// console.log("Student object:"); 
// console.log(student);
// console.log("Accessing nested object value:");
// console.log(student.marks.science);
// console.log("Updating nested object value:");
// Mutation
// student.marks.math=95;
// console.log(student.marks.math);

// Destructuring
// const{name,age}=student;
// console.log(name);
// console.log(age);
// const{city}=student;
// console.log(city);
// const{country}=student;
// console.log(country);
// const{marks:{science,math}}=student;
// console.log(science);
// console.log(math);
// console.log("-----------------------------------------------------------------------------------------------------------");
// console.log(student);
console.log("-----------------------------------------------------------------------------------------------------------");
let{city}=student;
console.log(student);
city="Mumbai";
console.log(student);
console.log(city);
console.log("-----------------------------------------------------------------------------------------------------------");
const ram={
    name:"Ram",
    age:22,
    city:"Chennai"
}
const raj=ram;
// console.log(ram);  
// console.log(raj);

console.log("-----------------------------------------------------------------------------------------------------------");
// spread or rest operator ...removes the reference or outer most structure
console.log("Using Spread Operator:");
const shyam={...ram};
console.log(ram);  
console.log(shyam); 
shyam.city="Kolkata";
console.log("After updating shyam's city:");
console.log(ram);  
console.log(shyam);
console.log("-----------------------------------------------------------------------------------------------------------");
// Array-order matters
// let array1 = [1, 2, 3];

