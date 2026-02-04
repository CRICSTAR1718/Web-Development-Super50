// const usename = prompt("what is you name");
// //age
// const age = prompt("what is your age");
// //if age is invlid --> string or <10         
// //branch
// const branch = prompt("what is your branch");     
// //store in it object
// const student = {
//     name: usename,
//     age: age,   
//     branch: branch
// };

// //show on it console 
// console.log(student);

// Arrays
// console.log("------------------------------------------------------`")
// const obj1={
//     0: "raj",
//     1: "ram",
//     2: "ravi",
//     3: "rohan"
// };
// console.log(obj1);
// console.log("Keys:", Object.keys(obj1)); // shows keys/indexes
// console.log("Values:", Object.values(obj1));  //shows values
// console.log("Entries:", Object.entries(obj1));  // shows key value pairs in array
// console.log("Length:", Object.keys(obj1).length); // shows length
// console.log("-----------------------------------------------------------------")
// const arr1 = ["raj", "ram", "ravi", "rohan"];
// console.log(arr1);
// console.log("-----------------------------------------------------------------")
// CRUD Operations
// Create
// arr1[40] = "new value"; 
// arr1.push("sachin"); // adds at last
// arr1.unshift("suresh"); // adds at first  
// console.log(arr1);
// Read
// console.log(arr1[2]);
// Update
// arr1[1] = "mohan";
// console.log(arr1);
// Delete
// arr1.pop(); // removes last element
// arr1.splice(2, 1); // removes element at index 2
// delete arr1[0]; // shows undefined at index 0 or empty slot
// arr1.splice(0, 1); // removes element at index 0 and shifts elements
// arr1.shift(); // removes first element
// console.log(arr1); 
// console.log("-----------------------------------------------------------------")


// Functions
// function splittxt(txt) {
//     // console.log("Text:", txt);
//     // const words = txt.split(""); // splits at every character
//     // const words = txt.split(" "); // splits at space
//     // const words=txt.split("").join(";"); // joins with ;
//     // const words = txt.split(" ").join("-"); // joins with -
//     //console.log("Words:", words);
//     // console.log("Words:", txt.split(" ") .join("-")); // methods chaining
// }
// splittxt("Hello");
// splittxt("Another example text to split");

// console.log("-----------------------------------------------------------------")
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     if (str === reversed) {
//         console.log(`${str} is a palindrome`);
//     } else {
//         console.log(`${str} is not a palindrome`);
//     }
// }

// palindrome("madam");
// palindrome("hello");
// palindrome("racecar");
// palindrome("Hello World");
// console.log("----------------------------------------------------------------");
// console.log("----------------------------------------------------------------");
// function print(txt){
//     console.log(txt);
// }
// function add(a,b){
//     return a+b;
// }
// print("Hello World");
// const sum = add(5,10);
// print("Sum: "+sum);
// print("Sum: "+ add(20,30));
// const x =10;
// const y=15;
// print("Sum: "+ add(x,y)); 
// console.log("----------------------------------------------------------------");

// console.log("----------------------------------------------------------------");
// function print(txt){
//     console.log(txt);
// }
// function add(a,b,print){
//     const result = a+b;
//     print("Sum: "+result);
//     // return result;
// }
// print("Hello World");
// add(5,10,print);
// add(20,30,print);
// const x =10;
// const y=15;
// add(x,y,print);
// console.log("----------------------------------------------------------------");

// 5 ways to write functions
// 1. Function Declaration
//cons: 1. you can call before declaration  2. you can redeclare with same name
// function greet1(name) {
//     console.log("Hello " + name + " from Function Declaration");
// }
// greet1("Raj");
// console.log("----------------------------------------------------------------");
// 2. Function Expression
// pros: 1. you cannot call before declaration  2. you cannot redeclare with same name 3.you cannot reassign if const is used
// const greet2 = function (name) {
//     console.log("Hello " + name + " from Function Expression");
// };
// greet2("Ram");
// console.log("----------------------------------------------------------------");
// 3. Arrow Function
// const greet3 = (name) => {
//     console.log("Hello " + name + " from Arrow Function");
// };
// greet3("Ravi");
// console.log("----------------------------------------------------------------");
// 4. Immediately Invoked Function Expression (IIFE)
// (function (name) {
//     console.log("Hello " + name + " from IIFE");
// })("Rohan");
// console.log("----------------------------------------------------------------");
// 5. Method in Object
// const greeter = {
//     greet4: function (name) {   
//         console.log("Hello " + name + " from Method in Object");
//     }
// };
// greeter.greet4("Suresh");
// console.log("----------------------------------------------------------------");


