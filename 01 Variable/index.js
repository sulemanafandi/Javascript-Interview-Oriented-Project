// let a = 3, b = 20, c = 21 ;
// a = 21,
// b = 40,
// c = 1;
// console.log(a,b,c);

//  : Variable can be re-declared & updated. A global scope variable.
// var d = 20;
// var d = 21;
// console.log(d);

// let : Variable cannot be re-declared but can be updated. A block scope variable.
// let z  = 20;
// z = 22;
// console.log(z);

// const : Variable cannot be re-declared or updated. A block scope variable. (variables declared with const keyword must have declaration & initialization both)
// const w  = 30;
// console.log(w);

// Rules for variable declaration:
// 1. Variable names are case sensitive;
// 2. “a” & “A” is different.
// 3. Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// 4. Only a letter, underscore( _ ) or $ should be 1st character.
// 5. Reserved words cannot be variable names.

// Primary (Primitive) Datatypes: 
// ❑ Number, String, Boolean, Undefined, Null, BigInt, Symbol all in one NNSSBBU
// ❑ Use typeof operator to identify the type of variable

// Different Types of cases exists in Programming:
// ❑ camelCase, snake_case, PascalCase, and kebab-case


// JavaScript is a Dynamically Typed Language & Forgiving Language

// let alpha = "salman";
// console.log(alpha);

// alpha = 1234;
// console.log(alpha);

// alpha = true;
// console.log(alpha);

// Forgive and does not produce any error
// myvar = 10;
// console.log(myvar);

// console.log(5 - "5");
// console.log(5 + "5");

// Q1: How do you declare a variable in JavaScript?
// let a ;
// console.log(a);//undefined

// Q2: What is the difference between var, let, and const?
// var can be re-decleced updated and global scope variable
// let : can not redeclered but can updated and block scope variable
// const : not redeclareed and updated and block scope varible must be declered and initialize

// Q3: Can you change the value of a const variable?
// Not 

// Q4: What will happen if you use a variable without declaring it?
// Using a variable without declaring it creates a global variable in non-strict mode, but throws a ReferenceError in strict mode.

// Q5: What is the default value of an uninitialized variable in JavaScript?
// The default value of an uninitialized variable in JavaScript is undefined.
// let names ;
// console.log(names); // undefined


// Q6: What are the primitive data types in JavaScript?
// Number , null, bolean, bigint, string, symbol, undefined so primitive means no changes immutable

// Q7: What is the difference between null and undefined?

// let a;
// console.log(a); // undefined → variable declared but no value assigned

// let b = null;
// console.log(b); // null → explicitly assigned as "no value"

// undefined: javascript kud deta hai
// جب ویری ایبل بنایا جائے لیکن کوئی ویلیو نہ دی جائے۔

// null: hum kud detay hai jab humay value kali rekhni ho
// جب آپ خود ویری ایبل کو "خالی" ویلیو دیں تاکہ ظاہر ہو کہ اس میں کچھ نہیں۔

// Q8: Is JavaScript a statically typed or dynamically typed language?
// JavaScript is a dynamically typed language.
// Dynamically typed 
// کا مطلب یہ ہے کہ:

// ویری ایبلز کو ڈیٹا ٹائپ کے ساتھ اعلان کرنے کی ضرورت نہیں ہوتی۔

// ویری ایبل کی ٹائپ رن ٹائم پر خود طے ہوتی ہے، یعنی جب کوڈ چلتا ہے۔

// let x = 5;       // x is a number
// x = "Hello";     // Now x is a string
// //  pehlay number ta pir javascript nay kud hi type change ki string ho gaya 

// let data = "123";
// if (typeof data === "string") {
//   console.log("It's a string");
// }

// Q9: What will be the output of typeof nul?
// let a = null;
// console.log(typeof a); // object
// // "null is a primitive value in JavaScript because it represents the intentional absence of any object value. The reason typeof null returns 'object' is due to a historical bug in the language's implementation that was never fixed for backward compatibility. Despite this, null is officially classified as a primitive type in ECMAScript."
// console.log(typeof null); // "object"
// console.log(typeof null === "object"); // true 
// // so ye aik historical bug hai


// Q10: What happens when you add a number and a string in JavaScript?
// let a = 12;
// let b = "12";
// let c = a + b;
// console.log(c );//output 1212

// let result = 5 + "10";
// console.log(result); // "510"
// // so number ko string k sath add karna javascript ua ko concat kardy ta hai add nahi karta


// // Q11: What is type coercion? Give an example.
// console.log("5" + 2); // "52" → number 2 is coerced into a string
// console.log("5" - 2); // 3   → string "5" is coerced into a number
// // Type coercion ka matlab hai ke JavaScript khud hi values ki type badal deti hai jab zarurat ho — jaise string ko number mein ya number ko string mein


// Q12: How can you manually convert a string to a number in JavaScript?
// Aap string ko number mein convert karne ke liye Number(), parseInt(), parseFloat(), ya + ka use kar sakte hain.

// | Method             | Example               | Output   |
// |--------------------|-----------------------|----------|
// | Number()           | Number("123")         | 123      |
// | parseInt()         | parseInt("123")       | 123      |
// | parseFloat()       | parseFloat("123.45")  | 123.45   |
// | Unary + operator   | +"123"                | 123      |

// let str = "123";
// let num = Number(str);
// console.log(num); // Output: 123

// let str = "497";
// let num = parseInt(str);
// console.log(num);

// let str = 234.12;
// let num = parseFloat(str);
// console.log(num);

// let str = "123";
// let num = +str;
// console.log(num); // Output: 123


// Q13: What is the result of "5" - 3 in JavaScript?
// let str = "5";
// let num = 2;
// let result = str - num ;
// console.log(result);
// // another way
// console.log("5" - 2);


// Q14: What is NaN in JavaScript, and how do you check if a value is NaN?
// NaN stands for "Not-a-Number" — it's a special value in JavaScript that represents an invalid number result
// let result = "abc" / 2;
// console.log(result); // NaN
// // How to check:
// // Use isNaN() function:
// console.log(isNaN(result)); // true

// Agar aap kisi string ya invalid value ko number banane ki koshish karein aur wo fail ho jaye, to JavaScript NaN return karta hai. Check karne ke liye isNaN(value) ka use karte hain — agar true aaye to matlab wo NaN hai.

// Q15: How do you check the type of a variable in JavaScript?

// let str = "salman";
// console.log(typeof str);

// let num = 1234;
// console.log(typeof num); // number

// let num = 234.1234;
// console.log(typeof num);//number

// JavaScript mein kisi bhi variable ki type check karne ke liye typeof ka use hota hai. Ye batata hai ke value string hai, number hai, boolean hai, ya object.