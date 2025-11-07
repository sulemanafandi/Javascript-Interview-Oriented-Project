// agar ap ko baray projects bananay hai tu Modules k samajna ap k lie both zyada mportant hai q k codebase b both bara hoga pora aik file may nahi likh sakta multiple file ap create karo gy then multiple file ko ap connect karna chaho gy tu yahi multiple file create karnay k lie multiple file ko connect karnay k lie example aik file may ap nay functions banahydosray file may ap export kar rahy ho and dosray file may ap import kar rahay ho tu ya sari cheezay karnay k lie ap module ka use karo gy

// Modules are a way to organize code into reusable file 
// they help you split your code into smaller, manageable parts, making it easier to maintain, reuse, and avoid name collision

// matlsb aik file banahy gy or us ko bar bar use karen gy jaisay aik function banahy gy or usay multiple jaga reuse kar saktay hai 

// example #1 
// common js means default export q k varable ka name dosri jaga change kar saktay hai
// const nm = require('./math.js'); 
// console.log(nm);


// // example #2
// const obj = require('./math.js');
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);

// example #3
// const {name,age} = require('./math.js');
// console.log(name);
// console.log(age);

// example #4
// const {sum,subtruct,multiply,divide} = require('./math.js')

// let result1 = sum(2,4);
// let result2 = subtruct(10,4);
// let result3 = multiply(10,4);
// let result4 = divide(10,4);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


// ES6 Modules (Modern Javascript
// Default Export
// backend etc may common js use ho raho hota hai abi but front end may es6 module use ho raho hai
// acha ES6 modules may be do export hotay hai
// 1. Default export
// 2. Named export

// Example #5
// agar aik kam export karna hai tu default export karo
// import sum from './math.js' // math wo file hai jahan ap nay export kiya hai

// let result1 = sum(2, 4);
// console.log(result1);


// Example #6
// agar ap nay aik saath sari cheezay export karni hai tu default export karo
// import allFunc from './math.js' // math wo file hai jahan ap nay export kiya hai

// let result1 = allFunc.sum(2, 4);
// let result2 = allFunc.subtruct(10, 4);
// let result3 = allFunc.multiply(10, 4);
// let result4 = allFunc.divide(10, 4);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// Example #7
// agar ap nay aik saath sari cheezay export karni hai tu named export karo
// import {sum, subtruct, multiply, divide} from './math.js' // math wo file hai jahan ap nay export kiya hai
// let result1 = sum(2, 4);
// let result2 = subtruct(10, 4);
// let result3 = multiply(10, 4);
// let result4 = divide(8, 4);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// Example #8
// agar aik hi import karna hai tu ap aik function ko import kar saktay ho
// import {sum} from './math.js' // math wo file hai jahan ap nay export kiya hai

// let result1 = sum(2, 4);
// console.log(result1);


// Example #9
// import { multiply as mul,divide,subtruct,sum } from "./math.js";

// let result1 = sum(1,7);
// let result2 = mul(2,7);
// let result3 = divide(35,7);
// let result4 = subtruct(40,7);

// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)