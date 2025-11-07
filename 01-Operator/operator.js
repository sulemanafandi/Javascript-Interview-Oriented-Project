

// Arthimatic Operator
// // // console.log("hello");
// // // console.log("5+2");
// // // console.log(5+2);
// // // console.log("5-2" , 5-2);
// // // console.log("5*2" , 5*2);
// // // console.log("5+2" , 5+2);
// // // console.log("5/2" , 5/2);
// // // console.log("5%2" , 5%2);
// // // console.log("5**2" , 5**2);

// // //challegence One
// // let pricePeritem = 150;
// // let quentity = 3;
// // let totalPrice = pricePeritem * quentity;
// // console.log(totalPrice);
// // let Discount = totalPrice * (10 / 100);
// // let discountPrice = totalPrice - Discount;
// // console.log("Price per Item " + discountPrice);
// // console.log("discount "+ Discount)
// // console.log("discountPrice "+ discountPrice)

// Assignment Operator
// let a =5;
// console.log(a);
// a = a+5;
// console.log(a);
// a = a+5;
// console.log(a);
// a = a-3;
// console.log(a)
// a =a*2;
// console.log(a)
// a = a/2;
// console.log(a)
// a = a%2;
// console.log(a)
// a = a + 5;
// console.log(a)
// a += 5;
// console.log(a);
// a -=2;
// console.log(a);
// a = a + 4;
// console.log(a);
// a += 10;
// console.log(a);

// comparision operator
// loosely Equal to  work on value basis
// console.log(5==5);
// console.log(5=="5");
// console.log(5!=2);
// console.log(5!="2");
// console.log(5!="5");

// Stricly Equal to work on datatype basis + value basis
// console.log(5===5);
// console.log(5==="5");
// console.log(5!==2);
// console.log(5!=="2");
// console.log(5!=="5");
// console.log(5!==5);

// logical Operator
// And Operator
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);
// console.log(false && true);

// OR Operator
// console.log(true || true);
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);

// Not Operator
// console.log(!true);
// console.log(!false);

// One Practicle Case
// let x = 3;
// console.log(x >= 30 && x <= 1000);
// console.log(x >= 0 ||  x <= 1000);

// Increment And Decrement operator
// let a = 5;
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a--);
// console.log(a);

// One Question
// let a = 10;
// let result = a++ +  ++a - 10;
// console.log(result);

// Ternary Operator
// let age = 18;
// let result = age >= 18 ? "Drive Car": "Not Drive";
// console.log(result);
// Challenege
// let users = 18;
// let messege = users >= 18 ?  "Eligible For booking":"NoT Eligible Booking";
// console.log(messege)

// let username = "salman";
// let password = "123";
// const messege = (username && password) ? "Login Successfull" : "Please fill value";
// console.log(messege);

// Find the largest number from given 3 Number . using ternary
// let a = 5 , b = 2, c = 12;
// let result = a > b ? (a > c ? a : c) : (b > c ? b: c);
// console.log(result);

// Bitiwise Operator
// console.log(5&3);
// console.log(4&7);

// console.log(8 | 11);
// console.log(26 | 15);

// console.log(~3);
// console.log(~0);
// console.log(~(-5));

// Truthy Falsy
// let result = (true && true) ? "OKAy" : "NO";
// console.log(result);

// let res = (true && false) ? "OKAy" : "NO";
// console.log(res);

// let resu = ("" && 25) ? "OKAy" : "NO";
// console.log(resu);

// so , Falsy ----> false,undefined,null,0,-0,NaN,0n,""
//  Truthy ----> anything which is not falsy

// let username = "";
// let password = "";
// const messege = (username && password) ? "Login Successfull" : "Please fill value";
// console.log(messege);

// Short-Circuiting

// console.log("" || undefined || "Salman" || null || 0);
// console.log("" || undefined || 0n || null || 0);

// console.log("salman" && 23 && true && null && undefined);
// console.log("salman" && 23 && true && "salo"  && "12");

// Nullish Coalescing only use null and undefined
// let result = null ?? "salman";
// console.log(result);

// let result = undefined ?? "Muhammad";
// console.log(result);

// let result = "alpha" ?? "Muhammad";
// console.log(result);

// Qno1 : Get user to input two number using prompt and print their possible arhmetics result
// let num1 = Number(prompt("Enter first Number:"));
// let num2 = Number(prompt("Enter secound Number:"));
// console.log(" num1 + num2 ",  num1 + num2);
// console.log(" num1 - num2 ",  num1 - num2);
// console.log(" num1 * num2 ",  num1 * num2);
// console.log(" num1 / num2 ",  num1 / num2);
// console.log(" num1 % num2 ",  num1 % num2);
// console.log(" num1 ** num2 ",  num1 ** num2);

// Qno2: Can you chain assignment operatotr?
// let a = b = c = 12;
// console.log(a,b,c);
// console.log(a);
// console.log(b);
// console.log(c);

// Qno3: Get user to input a number using prompt and whether even or odd using binary operator
// let num1 = Number(prompt("Enter Your Number :"));
// let result = (num1 % 2 === 0) ? "Even Number" : "Odd Number";
// console.log(result);

// Qno4: What is a final value of x?
// let x = 5;
// x += 3;
// x -=2;
// x *=4;
// x /=6;
// x %=3;
// console.log(x);

// Qno4: What is a final value of x?
// let x = 5;
// console.log(x);
// x += 3;
// console.log(x);
// x -=2;
// console.log(x);
// x *=4;
// console.log(x);
// x /=6;
// console.log(x);
// x %=3;
// console.log(x);

// Qno5: Check if a number is with in a range between 10 and 20 (inslive)
// let num = 11;
// let result = num >= 10 && num <= 20;
// console.log(result);

// Qno6: write a program to find the largest number b/w 3 number using ternary operator
// let a = 15, b = 13,  c = 2;
// let result = a>b ? (a > c ? a : c) : (b > c ? b : c);
// console.log(result);

// Qno7: Take an email and password from the user. if the email or password incorrect or does not match tyhe stored value. display messege "Invalid email or password" if both email and password match the stored values,display "you are logged in Successfully".

// let usersname  = "salman";
// let password = "123";

// let databaseUser  = "salman";
// let databasePassword = "123";

// let result =  (usersname && password && usersname === databaseUser && password===databasePassword) ? "Login Successfull" : "Invalid username or password"
// console.log(result);

// Qno8: what will to the output of the following Javascript code?
// let a  = 5, b = 3, c = 2;
// let result =  (a++) + (--b)* (c--) - (++a) + (b--) / (--c);
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("result:", result);

// Qno9: what is the output of comnsole.log(~a) where a = 0
// console.log(~0);

// Qno9: What will be the output of the following Javascript code?
// let x = 10;
// let y = 5;
// let z = "10";

//  x += y * 2;
// let isEqual = x == z;
// let isStrictEqual = x === z;
// let logicTest = (isEqual || isStrictEqual) && !(y > 10);

// let result = logicTest ? ++x : --y;

// console.log("x : ", x );
// console.log("y : ", y );
// console.log("z : ", z );
// console.log("isEqual : ", isEqual );
// console.log("isStrictEqual : ", isStrictEqual );
// console.log("logicTest : ", logicTest );
// console.log("result : ", result );
// console.log("Type of z : ", typeof z );

// console.log("first");
// setTimeout(() => {
//   console.log("second");
// }, 0);
// console.log("third");
// Real World Example: Simple Shopping Cart Calculation

// Suppose a user buys multiple items, each with a price and quantity.
// We'll calculate the total bill, apply a discount if the total exceeds a threshold, and show the final amount.

// const cart = [
//     { name: "Book", price: 250, quantity: 2 },
//     { name: "Pen", price: 50, quantity: 5 },
//     { name: "Bag", price: 1200, quantity: 1 }
// ];

// let total = 0;
// cart.forEach(item => {
//     total += item.price * item.quantity;
// });

// let discount = total > 2000 ? total * 0.1 : 0; // 10% discount if total > 2000
// let finalAmount = total - discount;

// console.log("Total Bill:", total);
// console.log("Discount Applied:", discount);
// console.log("Final Amount to Pay:", finalAmount);


// Program: Check if a number is positive, negative, or zero
// let number = Number(prompt("Enter a number:"));
// let message = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// console.log("The number is:", message);

// Professional Example: Calculate Grade Based on Marks

// function calculateGrade(marks) {
//     if (typeof marks !== "number" || marks < 0 || marks > 100) {
//         return "Invalid marks";
//     }
//     return marks >= 90 ? "A+" :
//            marks >= 80 ? "A" :
//            marks >= 70 ? "B" :
//            marks >= 60 ? "C" :
//            marks >= 50 ? "D" : "F";
// }

// // Example usage:
// const studentMarks = 95;
// console.log(`Student Grade: ${calculateGrade(studentMarks)}`);



// comparison operator loosly
// console.log(5==5);
// console.log(5=="5");
// console.log(5!=2);
// console.log(5!="2");
// console.log(5!="5");
// console.log(5!=5);

// strict comparison operator
// console.log(5===5);
// console.log(5==="5");
// console.log(5!==2);
// console.log(5!=="2");
// console.log(5!=="5");
// console.log(5!==5);

// logical Operator
// And Operator
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);
// console.log(false && true);

// OR Operator
// console.log(true || true);
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);

// Not Operator
// console.log(!true);
// console.log(!false);

// One Practicle Case
// let x = 3;
// console.log(x >= 30 && x <= 1000);
// console.log(x >= 0 ||  x <= 1000);

// Increment And Decrement operator
// let a = 5;
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a--);
// console.log(a);

// One Question
// let a = 10;
// let result = a++ +  ++a - 10;
// console.log(result);

// Ternary Operator
// let age = 18;
// let result = age >= 18 ? "Drive Car": "Not Drive";
// console.log(result);
// Challenege
// let users = 18;
// let messege = users >= 18 ?  "Eligible For booking":"NoT Eligible Booking";
// console.log(messege)

// let username = "salman";
// let password = "123";
// const messege = (username && password) ? "Login Successfull" : "Please fill value";
// console.log(messege);

// Find the largest number from given 3 Number . using ternary
// let a = 5 , b = 2, c = 12;
// let result = a > b ? (a > c ? a : c) : (b > c ? b: c);
// console.log(result);
