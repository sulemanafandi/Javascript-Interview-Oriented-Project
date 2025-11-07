// let n = 0;
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     sum += i;
// }
// console.log(sum);

// function Myfunc(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum)
// }
// Myfunc(6);


// Four Types of function

// 1:without parameter and without return
// function alpha(){
//     console.log(`hi`);
//     console.log(`hi`);
//     console.log(`hi`);
//     console.log(`hi`);
//     console.log(`hi`);
//     console.log(`hi`);
// }
// alpha();

// let str = "salman";
// console.log(str);
// alpha();

// 2:with parameter and with return
// function beta() {
//   return "salman";
// }
// let a = beta();
// console.log(a);

// with parameter and without return
// function gamma(a,b){
//     console.log(`hello`,a);
//     console.log(`hello`,b);
//     console.log(`hello`);
// }
// gamma("salman");

// with parameter and with return
// function teta(a){
//     return a;
// }
// let c = teta("salo");
// console.log(c);

// another way
// function greet(name){
//     return "salman "+ name
// }
// let a = greet("khan");
// console.log(a);

// another way return k bad console.log print nahi hoga
// function greet(name){
//     console.log(`hi`);
//     console.log(`hi`);
//     return "salman "+ name;
//     console.log(`something something`);
// }
// let a = greet("khan");
// console.log(a);

// another ways
// function greet(a, b) {
//   let x = a + b;
//   return x;
// }
// let z = greet(2,3);
// console.log(z);

// so, default paramater
// function salobahi(name) {
//     console.log (name);

// }
// salobahi("salman");

// another way
// function salo(fname = 'Muhammad ') {
//     console.log(fname + "salman");
// };
// salo();

// another way
// function salman(name = "Muhammad"){
//     console.log(name + " Khan");
// };
// salman("salo bahi")

// Types Of Function
// 5 types

// 1: function decleration (normal function)
// declered with the function keyword, can be hoisted

// function greet(){
//     console.log(`hello`);
// }
// greet();

// 2: Function Expression
// Stored in a variable , not hoisted
// const alpha = function (){
//     console.log(`hello`);
// }
// alpha();

// 3: Arrow Function (fat arrow function)
// Shortner syntax, introduced in ES6
// let fname = () => {
//     console.log(`hello`);
// };
// fname();

// 4: Anonymous Function
// A function without a name,often used in Expression
// setTimeout(function () {
//   console.log("hello");
// }, 2000);

// 5: IIFE (Immediately Invoked Function Expression )
// A function that runs as soon as its defined
// (function(){
//     console.log("hello");
// })
// ();

// oper tu jo type ty wo slide say lihy gahy tay ap dobara say code karay
// function sum(a,b){
//     return a + b;
// };

// let a = sum(2,3);
// console.log(a);

// let b = function (a,b){
//     return a+b;
// };
// let c = b(3,4);
// console.log(c);

// let d = (a,b) => {
//     return a + b;
// }
// let e = d(30,20);
// console.log(e);

// higher order function q k apnay andar function ly rahay hotay hai us k andar function ka koyi name nahi hota anomymous function hota hai
// setTimeout(() => {
//   console.log("salman");
// }, 2000);

// setTimeout(sal,2000);

// (function(){
//      console.log("salman")
//     })();

// hoisting
// greet(); // can  access before initialization
// function greet(){
//     console.log("Hello");
// };

// or
// greet(); // can not access before initialization
// let greet = ()=>{
//     console.log("salman");
// }

// Qno1: Write a regular function that takes a string and return it with the first letter capitalized
// function capitalized(str) {
//   console.log(str.charAt().toUpperCase() + str.slice(1));
//   return str;
// }
// capitalized("salman");

// Qno2: Show an alert message that says "please log" in after 5 seconds on your website

// setTimeout(() => {
//     alert("please login !");
// }, 5000);

//  Qno3: Make an arrow function that takes a price and a discount and return the price after discount

// let calculatedDiscountedPrice = (price, discount) => {
//   let discountedPrice = price - price * (discount / 100);
//   return discountedPrice;
// };
// let result = calculatedDiscountedPrice(100, 20);
// console.log(result);

// another way
// let discountedPrice = (price, discount) => {let discounted = price - price * (discount/100)
//     return discounted; }
//     let result = discountedPrice(100,60);
//     console.log(result);

// another way
// let calculatedDiscountedPrice = (price, discount) => price - price * (discount / 100);
// let result = calculatedDiscountedPrice(1050, 15);
// console.log(result);

// Qno4: Create a function that build a username from a full name
// function generateUserName(fullName) {
//   return fullName + "@gmail.com";
// }
// let result = generateUserName("sulemanafandi18");
// console.log(result);

// Qno5: write a function that takes a traffic light color and gives the correct instruction e.g "go" for green "stop" for red, "caution" for yellow and "invalid color" for anything else
// let color = "red";
// function generateInstruction(color) {
//   if (color === "red") {
//     return "Stop Car ";
//   } else if (color === "yellow") {
//     return "Caution Car";
//   } else if (color === "green") {
//     return "Go Car";
//   } else {
//     return "Invalid Color please true value";
//   }
// }
// let result = generateInstruction("green");
// console.log(result);
// another way
// let color = "red";
// function generateInstruction(color) {
//   switch (color) {
//     case "red":
//       return "Stop Car";
//     case "yellow":
//       return "Caution Car";
//     case "green":
//       return "Go Car";
//     default:
//       return "Invalid Color please true value";
//   }
// }
// let result = generateInstruction("red");
// console.log(result);

// another way
// function generateInstruction(color) {
//   let instruction = "";
//   if (color === "red") {
//     instruction = "Stop Car";
//   } else if (color === "yellow") {
//     instruction = "Caution Car";
//   } else if (color === "green") {
//     instruction = "Go Car";
//   } else {
//     instruction = "Invalid Color please true value";
//   }
//   return instruction;
// }
// let result = generateInstruction("yellow");
// console.log(result);

//  this is Copilot guees suggestion Question

// another way
// function capitalized2(str) {
//   let firstLetter = str.charAt(0).toUpperCase();
//   let otherLetters = str.slice(1);
//   return firstLetter + otherLetters;
// }
// let a = capitalized2("khan");
// console.log(a);
// document.write(a);

// Qno2: Write a function that takes two numbers and return their sum
// function sum(a, b) {
//   return a + b;
// }
// let c = sum(5, 10);
// console.log(c);
// document.write(c);
// Qno3: Write a function that takes an array of numbers and return the largest number in the array
// function largestNumber(arr) {
//   let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// let d = largestNumber([3, 5, 7, 2, 8]);
// console.log(d);
// document.write(d);
// Qno4: Write a function that takes an array of strings and return a new array with all strings capitalized
// function capitalizeArray(arr) {
//   let capitalizedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return capitalizedArr;
// }
// let e = capitalizeArray(["salman", "khan", "is", "a", "good","Developer"]);
// console.log(e);
// document.write(e);
// Qno5: Write a function that takes a number and return true if it is prime, false otherwise
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// let f = isPrime(11);
// console.log(f);
// document.write(f);
// Qno6: Write a function that takes a string and return the number of vowels in the string
// function countVowels(str) {
//   let count = 0;
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
// let g = countVowels("salman khan is a good developer");
// console.log(g);
// document.write(g);