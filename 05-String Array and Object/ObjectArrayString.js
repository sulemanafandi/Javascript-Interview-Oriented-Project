// String in Javascript

// let str = "Salman";
// let str2 = "salo bahi";
// let str3 = `salman bahi`;
// let alpha = "salman" + 23 + "khan";
// let beta = "Halwa" + alpha;
// let gamma = `Halwa${alpha}`;
// let teta = "Halwa" - alpha;
// console.log(str);
// console.log(str2, typeof str2);
// console.log(str3);
// console.log(alpha);
// console.log(beta);
// console.log(gamma);
// console.log(teta);

// let firstName = "Muhammad";
// let middleName = "Suleman";
// let lastName = "Khan";
// let fullName = firstName + " " + middleName + " " +lastName;
// let fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);

// let Name = "Salman";
// console.log(`My Name is ${Name}`)

// let a = 10;
// let b = 20;
// let c = 30;
// console.log(`Number 1: ${a}, Number 2: ${b}, Number 3: ${c} `);
// so jo backtick k andar hai us ko kehtay hai templete literal or jo ye ${a} name hai us ko kehtay hai placeholder or us paray method ko string interpolation kehty hai

// let gamma = `Calculated output ${1+2+34}`;
// console.log(gamma);

// let str  = new String("salman khan");
// console.log(str);

// Escape Sequence Character
// let str = "hello \nhow are you ";
// console.log(str);

// let str = 'salman';
// let str2 = 'salman\nkhan';
// let str3 = "salman\"khan";
// let str4 = "salman\\khan";
// let str5 = "salman\\'khan";
// let str6 = "salman\\n'khan";
// console.log(str, str.length);
// console.log(str2, str2.length);
// console.log(str3);
// console.log(str4);
// console.log(str5);
// console.log(str6);

// let str = "Hellow World";
// console.log(str[1]);
// console.log(str[7]);

// str[7] = "u";
// console.log(str); // so output is Hello World so string is immutable

// let str = "Hello baba";
// for(let ch of str){
//     console.log(ch);
// }

// let str = "Hello baba";
// for(let key in str){
//     console.log(key);
// }

// let str = "Hello bahi";
// let str2 = "";
// for(let ch of str){
//     str2 = str2 + ch + " ";
// }
// console.log(str2);

// Properties and Methods in Javascript
// let str = "salman";
// console.log(str.length); // so, length is a property siraf bata raha hota hai kitnay character hai

// Methods () us paranthesis say pata chalta hai k methods hai or ye kam kar raha hota hai matlab toUpperCase() ye string k character ko uppercase may convert kar raha hota hai
// let str = "hello";
// let strCopy = str.toUpperCase();
// console.log(strCopy);

// let str = "hello";
// let strCopy = str.toUpperCase();
// console.log(str,strCopy); // tu orignal string ap k jaisa ta wasa hi hai

// let str = "Salman Khan";
// let strCopy = str.toLowerCase();
// console.log(strCopy);

// let str = "          Salman Khan    ";
// let str2 = str;
// console.log(str2);
// let strCopy = str.trim();
// console.log(strCopy);

// let fname = "Muhammad ";
// let lname = "Suleman";
// let fullName = fname.concat(lname);
// console.log(fullName);

// let fname = `Muhammad `;
// let middleName = "Suelman ";
// let lname = "khan";
// let fullName = fname + middleName + lname;
//  // let fullName = fname.concat(middleName,lname);
// console.log(fullName);

// let str = "I am a boy";
// let check = str.includes("boy");
// console.log(check); // output true

// let str = "I am a boy";
// let check = str.indexOf("o");
// console.log(check);

// let str = "I am a boy";
// console.log(str.indexOf("a"));

// let str = "salman";
// let check = str.charAt(3);
// console.log(check)

// let str = "I am a Student";
// let copy = str.replace("Student", "Developer");
// console.log(copy);

// let str = "I am a student, and i am a student";
// let copy = str.replace("student", "bussiness");
// let copy2 = str.replaceAll("student", "bussiness");
// console.log(copy);
// console.log(copy2);

// let username = "@salmanafandi";
// let copy = username.slice(1);
// console.log(copy);

// let username = "@salmanafandi18@gmail.com";
// let copy = username.slice(7,13);
// console.log(copy);

// let username = "@salmanafandi18@gmail.com";
// let copy = username.slice(-4);
// console.log(copy);

// same han substring
// let username = "@salmanafandi18@gmail.com";
// let copy = username.substring(8);
// let copy2 = username.slice(8);
// console.log(copy);
// console.log(copy2);

// let str = "salman alpha beta gamma";
// let copy = str.split(" ");
// let copy2 = str.split("");
// let copy3 = str.split("a");
// let copy4 = str.split();
// console.log(copy);
// console.log(copy2);
// console.log(copy3);
// console.log(copy4);

// remmember string are immutable means not changes okay
// let str = "I am a boy";
// str = "I am Salman";
// console.log(str);
// so output is I am salman because hum assign kar saktay hai but original string ko change nahi kar saktay hai

// Qno1: Create a program to take full name from user and generate a username start with @ followed by their full name and end with underscore followed by the length of full name

// let fullname = prompt("Enter Your Full Name ");

// let username = "@" + fullname + "_" + fullname.length
// let username1 = ` @${fullname.trim().replaceAll(" ","")}_${fullname.length}`;
// console.log(username1);

// QNO2: Take a string and a Character from the user and
// a. count how many times that character appears in the string
// b. case insensitive version
// C. find all Occurrence position

// let str = prompt("Enter Your String Please");
// let char = prompt("Enter Your Character Please");

// let count = 0;
// for (let val of str) {
//   if (val.toLowerCase() === char.toLowerCase()) {
//     count++;
//   }
// }
// or
// for (let index in str) {
//   if (str[index].toLowerCase() === char.toLowerCase()) {
//     console.log("Occurance Position = " + index);
//     count++;
//   }
// }
// console.log("Count = " + count);

// QNO#3: Count the word present in a given string
// let str = "I am salman khan";
// let copy = str.split(" ");
// let copy1 = str.split(" ").length;
// console.log(copy);
// console.log(copy1);

// Array in Javascript
// array literal method
// let arr = ["salman", "21", "MERN Stack", "IT"];
// let mark = [98, 25, 75, 59.5];
// let productDetail = ["Makhan", "dahi", "malahi", 100];
// let arr1 = [2, 3, 4, "mkl", [2, 3, 4, "salman"]];
// console.log(arr);
// console.log(mark);
// console.log(productDetail);
// console.log(arr1);

// array Constructor method
// let arr = new Array(2,3,4,"salman");
// console.log(arr);

// array constructor usecase
// let arr = [20];   // output 0:20 length:1 matlab 1 item hai aik present hai us may value hai
// let cons = new Array(20);  // output [empty ❌ :20] lenth:20 matlab 20 item present han laken empty hai
// let cons1 = new Array(20).fill(0);  // output length:20 matlab 20 item present han value 0 hai kali nahi hai
// console.log(arr);
// console.log(cons);
// console.log(cons1);

// indexing Array
// array are mutable and typeof array is object
// let arr = ["salman", "21", "MERN Stack", "IT"];
// console.log(arr.length);
// console.log(typeof arr);
// console.log(arr[0]);
// console.log(arr[2]);
// arr[0] = 99;
// console.log(arr);
//  arr[2] ="salo";
// console.log(arr);

// array loop
// let arr = [1, 4, 5, 7, 8];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

// let arr = [1, 4, 5, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// };

// let arr = ["salman",80,90,"Mark"];

// for(let element of arr){
//     console.log(element);
// };

// let arr = ["Salo","bahi",123,98];

// for(let index in arr){
//     console.log(index);
// };

// Array Method
// let arr = [2, 4, 5, "salman", 45];
// console.log(arr);
// console.log(arr.length);
// let a = arr.push(99);
// console.log(arr,a);

// let arr = [2, 4, 5, "salman", 45];
// arr.pop();
// let b = arr.pop();
// console.log(arr,b);

// let arr = [2, 4, 5, "salman", 45];
// arr.unshift(7);
// arr.unshift(7,46,1);
// let a = arr.unshift(7,46,1);
// console.log(arr);
// console.log(arr,a);

// let arr = [2, 4, 5, "salman", 45];
// arr.shift();
// // arr.shift();
// let a = arr.shift();
// console.log(arr);
// console.log(arr, a);

// let arr = [12,30,24,"salman",70];
// let newArr = arr.slice(1,4);
// let newArr2 = arr.slice(-5,3);
// console.log(newArr);
// console.log(newArr2);
// so ye orignal array may changes nahi kar raha hai naya array bana k dy raha hai us lie naya varable liya
// us ko 1 or 4 likha hai 1 index say 4 tak do tu ye last wala index nahi deta

// tu ye aik time par multiple kam karta hai delete b karta hai or add b karta hai
// let arr = [12,30,24,"salman",70,80];
// arr.splice(3,2);
// arr.splice(3,2,33,50);
// let test =arr.splice(3,2);
// console.log(arr);
// console.log(test);

// concat();
// let arr = [12, 30, 24, "salman", 70, 80];
// let arr1 = ["fala", "demka"];
// let arr2 = ["khan"];
// let sal = arr.concat(arr1, arr2);
// console.log(arr); // no change orignal array
// console.log(sal);

//  Spread Operator tu both zyada use hota hai array concatination k lie
// let arr = [12, 30, 24, "salman", 70, 80];
// let arr1 = ["fala", "demka"];
// let arr2 = ["khan"];

// let newArr = [...arr,...arr1,...arr2];
// console.log(newArr);

// join(); ye array ko string may convert kar k dy raha hota hai
// let fruits = [`moago`,"orange","banana"];
// console.log(fruits.join());
// let test = fruits.join();
// let test = fruits.join();
// let test = fruits.join(" & ");
// console.log(test);
// console.log(test);
// console.log(typeof test);

// includes(); Question pouchta hai true false may output deta hai
// let fruits = [`moago`,"orange","banana"];
// let a = fruits.includes("moago") ;
// console.log(a);

// toString(); convert kar k de raha hai string may join b string kar k de raha ta laken kis tariqe say kar na hai  wo b join kar k de raha ta yaha siraf string m,ay convert karo gy
// let str = ["mango","orange","banana"];
// console.log(str);
// console.log(str,typeof str);
// let test = str.toString();
// console.log(test);
// console.log(test, typeof test );

// indexOf(); no change original array
// let str = ["mango","orange","banana"];
// let test  =str.indexOf("mango");
// console.log(str.indexOf("banana"));
// console.log(test);

// reverse(); change original array
// let str = ["mango","orange","banana"];
// let test = str.reverse();
// console.log(test);
// console.log(str.reverse());

// find(); no change original array
// let str = ["mango","orange","banana","papita","lichi"];
// let test =  str.find((item)=>{return item === "mango" });
// console.log(test);

// or anther way
// let str = ["mango","orange","banana","papita","lichi"];
// let test = str.find( (item) =>{
//     return item === "mango";
// });
// console.log(test);

// flat(); no changes orignal array
// acha us ka kam jo hai multiple array ko aik array banana wo ap parenthesis may bataho k kis level tak ap array ko aik kar saktay ho infinity karo gy acha hoga q k sab ko aik sath mil dy ga
// let heroes = [
//   "mango",
//   "orange",
//   "banana",
//   "papita",
//   "lichi",
//   ["salo", "samlan", "okay", ["sahi", "maza aya", ["salmo", ["salmanKhan"]]]],
// ];
// console.log(heroes);
// console.log(heroes.flat());
// console.log(heroes.flat(2));
// console.log(heroes.flat(Infinity));
// let test = heroes.flat(Infinity);
// console.log(test);

// sort(); change original array
// let arr = [10,5,1,20];
// arr.sort();
// console.log(arr);

// tu yaha string hai tu defenatily alphabatically sort kar raha hai
// jaisay dictionaray may a walay pehlay a tay hai pir b wala us tara ye b lexicograpicallay order(unicode order) may kar raha hai
// let herors = ['spidarman','Ironman','wanda',"salo"];
// herors.sort();
// console.log(herors);

// proper sort campare function
// let arr = [10,5,1,20];
// arr.sort((a,b)=>{
//     return a - b;
// });
// console.log(arr);

// let arr = [10,5,1,20];
// let test = arr.sort((a,b)=>{
//     console.log(a,b)
//     return b - a;
// });
// console.log(arr);
// console.log(test);

// let arr = [10,5,1,20];
// let test = arr.sort((a,b)=>{
//     console.log(a,b)
//     return a - b;
// });
// console.log(arr);
// console.log(test);

// Important topic
// Array iteration method or functional array methods:
// map(); higher order function hai matlab apnay andar b aik function ly raha hota hai
// or us function may do theezay (parameter) a rahi hoti hai aik element or secound index a raha hota hai tu by default do paramenter hotay hai aik or b a ta hai wo hai array
// map jo hai loop karnay ka kam kar raha hai sath sath index b dy raha hai
// tu for of and for in loop say powerfull hai us may element ,index,array sara mil raha hota hai
// tu yaha changes agar karna chatay ho tu har element may return b mil raha hoga matlab return kar k element ko 2 say multiply kar diya tu orignal array may koyi change nahi ho raha
// let arr = [1,2,5,9,10];
// arr.map((elem,index)=>{
//     console.log(elem,index);
// })

// let arr = [1,2,5,9,10];
// arr.map((elem,index,arr)=>{
//     console.log(elem,index,arr);
// })

// tu orignal array may koyi change nahi ho raha
// let arr = [1, 2, 5, 9, 10];
// arr.map((elem, ind, arr) => {
//   console.log(elem, ind, arr);
//   return elem * 2;
// });
// console.log("Orignal Array: ",arr);

// let arr = [1,3,4,5,7];
// let newArr = arr.map((elem,ind,arr)=>{
//     console.log(elem,ind,arr);
//     return elem * 4;
// });
// console.log(arr);
// console.log(newArr);

// forEach(); no change original array
// let arr = [1, 2, 5, 9, 10];
// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
// });

// let arr = [1, 2, 5, 9, 10];
// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
// });
// console.log(arr);

// let arr = [2, 4, 5, 7, 9, 80];
// arr.forEach((elem) => {
//    elem * 2;
// });
// console.log(arr); // output undefined

// let arr = [2, 4, 5, 7, 9, 80];
// let newArr = arr.forEach((elem) => {
//   return elem * 2;
// });
// console.log(newArr); // output undefined

// let arr = [2, 4, 5, 7, 9, 80];
// let newArr = arr.forEach((elem, index) => {
//   return arr[index] = elem * 2;
// });
// console.log(newArr);   // output undefined

// so yaha par orignal array may change hogaya
// let arr = [2, 4, 5, 7, 9, 80];
// arr.forEach((elem, index) => {
//   arr[index] = elem * 2;
// });
// console.log(arr);
// output Array(6) [ 4, 8, 10, 14, 18, 160]

// filter(); no change orignal array acha filter matlab mujay even number filter kar k do
// let arr = [1,2,5,7,5,87,4,86];
// let NewFilter = arr.filter((elem,index,arr)=>{
//     return elem % 2 === 0;
// });
// console.log(arr);
// console.log(NewFilter);

// let arr = [20, 1, 45, 46, 78, 77];
// arr.filter((elem) => {
//   return elem % 2 === 0;
// });
// console.log(arr); // output Array(6) [ 20, 1, 45, 46, 78, 77 ] because return howa hai hum nay variable may band nahi kiya hai

// let arr = [20, 1, 45, 46, 78, 77];
// let NewFilter = arr.filter((elem) => {
//   return elem % 2 !== 0;
// });
// console.log(NewFilter);

// so filter may condition pass kar saktay ho q k or kam karo gy wahi output milay ga
// let arr = [21,23,34,54];
// let NewFilter = arr.filter((elem)=>{
//     return elem * 2;
// });
// console.log(NewFilter); // output [ 21, 23, 34, 54 ]

// condion us tara
// let arr = [21,23,34,54];
// let NewFilter = arr.filter((elem)=>{
//     return elem > 34;
// });
// console.log(NewFilter);  //output [ 54 ]

// reduce(); no changes orignal array
// let arr = [3,4,6,9];
// let result = arr.reduce((previousValue,currentValue)=>{
//     return previousValue + currentValue;
// });
// console.log(arr);
// console.log(result);

// let arr = [20, 30, 40, 60];
// let result = arr.reduce((acc, currValue) => {
//   return acc + currValue;
// });
// console.log(arr);
// console.log(result);

// previous value may starting may 0 a gaya result may effect nahi aya q k 0 add hoga no isssue
// let arr = [20, 30, 40, 60];
// let result = arr.reduce((acc, currValue) => {
//   return acc + currValue;
// },0);
// console.log(arr);
// console.log(result);

// previous value may starting may 10 a gaya result may effect hoga  q k 10 add hoga
// let arr = [20, 30, 40, 60];
// let result = arr.reduce((acc, currValue) => {
//   return acc + currValue;
// },10);
// console.log(arr);
// console.log(result);

// Qno1: For an array with marks of student find the average marks of the entire class
// let students = [70, 60, 80, 98, 45, 38, 59, 99];
// let marks = students.reduce((prevValue, CurrValue) => {
//   return prevValue + CurrValue;
// });
// console.log(`marks : ${marks}`)
// let average = marks/students.length;
// console.log(`Averege : ${average}`);

// Qno2: create an array with given length(n) and  fill with 0
// let n = 25;
// let arr =new Array(25).fill(0);
// console.log(arr);

// Qno3: Create an array with given length (n) and store natural number from one to n
// let n = 25;
// let arr = new Array(25).fill(0);
// arr.forEach((_, index) => {
//   arr[index] = index + 1;
// });
// console.log(arr);

// Qno4: Consider an array of mcu heroes ([ironman, captain, black widow, Wanda, hulk, Black partner])
// now
// a) Add Spiderman at the end and thor at the start
// b) Remove black widow and add hockey in this place
// c) Check whether captian is present in the array

// let arr = ["ironman", "captain"," black widow", "Wanda", "hulk"," Black partner"];

// arr.push("spider man");
// arr.unshift("thor");
// console.log(arr);

// arr.splice(3,1,"hockey")
// console.log(arr);

// console.log(arr.includes("captain"));

// Qno5: How to check if given things is a ray or not ? how to convert other datatypes to array? what if we try to convert an object into and array?

// let test = 2;
// console.log(Array.isArray(test));

// let test = "salman";
// console.log(Array.from(test));

// let test = 500;
// console.log(Array.from(test));

// let test = {
//     name :"salman"
// };
// console.log(Array.isArray(test));

// Qno6: We have three variable A B C D . A contain any number B contain any string C contain any object and D contain any array can be create an array from all these four variable .if yes how?

// let test = "salman";
// let test1 = "khan";
// console.log(Array.from(test,test1));
// console.log(Array.of(test,test1));

// let a = 1;
// let b = "salo bahi";
// let c ={
//     name : "salman"
// };
// let d = [1,2,3,4];
// console.log(a,b,c,d);
// console.log(Array.of(a,b,c,d));

// Qno7: check weather given stream is palindrome or not. so palindrom means ahgy say paro ya pichay say paro

// let str = "hello";
// let str2 = Array.from(str).reverse().join("");
// console.log(str2);

// let arr = [1,2,3];
// let result = arr.reverse();
// console.log(result);

// let str = "hello";
// let revStr = str.split("").reverse().join("");
// console.log(revStr);

// let str = "ollo";
// let revStr = str.split("").reverse().join("");
// if (str === revStr) {
//   console.log("Plaindrome String");
// } else {
//   console.log("not plaindrome string");
// }

// Qno8: Capitalize the first letter of every word in a sentence
// let str = "hello how are you";
// let newArr = str.split(" ").map
// ((elem)=>{
//     return elem.charAt(0).toUpperCase() + elem.slice(1)
// });
// let finalString =newArr.join(" ");
// console.log(finalString);

// Object in Javascript
// Object literal
// Object are mutable matlab kuch add update remove insert kar sak tay hai and original object may change kar saktay hai

// let car = {
//     brand: "lamoborgini",
//     color: "red",
//     maxSpeed: 180,
//     stop: function (){
//         console.log("stoping with car...");
//     },
//     start: ()=>{
//         console.log("starting with car....");
//     }
// };
// console.log(car);

// let car = {
//   brand: "lamoborgini",
//   color: "red",
//   maxSpeed: 180,
//   stop: function () {
//     console.log("stoping with car...");
//   },
//   start: () => {
//     console.log("starting with car....");
//   },
// };

// console.log(car);
// console.log(car.brand); // dot notation
// console.log(car.stop);
// console.log(car.start);
// console.log(car.stop());
// console.log(car.start());

// let car = {
//   brand: "lamoborgini",
//   color: "red",
//   maxSpeed: 180,
//   stop: function () {
//     console.log("stoping with car...");
//     return 1;
//   },
//   start: () => {
//     console.log("starting with car....");
//     return "successfull";
//   },
// };

// console.log(car);
// console.log(car.brand);
// console.log(car.stop());
// console.log(car.start());
// car.stop();
// car.start();

// let car = {
//   brand: "lamborgeni",
//   color: "red",
//   maxSpeed: 190,
//   start: () => {
//     console.log("Start...");
//   },
//   stop: function () {
//     console.log("Stop...");
//   },
// };
// console.log(car);
// console.log(car.brand); // dot notation
// car.start();
// car.stop();
// console.log(car["brand"]); // bracket notation
// console.log(car["color"]);
// car["start"]();
// car["stop"]();

// let car = {
//   "brand": "lamborgeni",
//   "color": "red",
//   "max Speed": 190,
//   start: () => {
//     console.log("Start...");
//   },
//   stop: function () {
//     console.log("Stop...");
//   },
// };
// console.log(car);
// console.log(car.brand);
// console.log(car["max Speed"]);
// car.start();
// car.stop();
// console.log(car["brand"]);
// console.log(car["color"]);
// car["start"]();
// car["stop"]();

// let car = {
//     "brand": "lamborgeni",
//     "full name": "salman khan"
// };
// console.log(car.brand);
// // console.log(car.full name); // output syntax error us tara nahi kar saktay
// console.log(car["full name"]); //output 'salman khan'

// let test  = "full name";
// console.log(car[test]);  //output 'salman khan'

// let obj = {
//     "*": "salo bahi"
// };
// console.log(obj);
// console.log(obj["*"]);

// let obj = {
//     name : "salman khan",
//     "Field" : "IT"
// };
// obj.age = 30;
// console.log(obj); //output { name: 'salman khan', Field: 'IT', age: 30 }

// obj.time = "10 bajh";
// console.log(obj); // output { name: 'salman khan', Field: 'IT', age: 30, time: '10 bajh' }

// Object Constructor

// let obj = new Object({
//     name:"salman Khan"
// });
// console.log(obj); // output { name: 'salman Khan' }
// obj.age = 30;
// console.log(obj); //output { name: 'salman Khan', age: 30 }

// Access object literal properties
// update property
// let obj = {
//   name: "salman khan",
//   age: 23,
// };
// console.log(obj);
// obj.name = "Muhammad Suleman";
// obj["name"] = "Muhammad Suleman"; // same ye b kam kar raha hai
// console.log(obj);

// add property
// let obj = {
//     "name" : "salo bahi",
//     age : 21
// };
// obj.field  = "IT";
// obj["Course"]  = "MERN Stack";
// console.log(obj);
// console.log(obj);

// delete property
// let obj = {
//     name : "salo bahi",
//     role : "student",
//     age : 21
// };
// delete obj.age;
// delete obj["name"];
// console.log(obj); //output { name: 'salo bahi', role: 'student' }

// read object
// let obj = {
//     student : "Suleman",
//     "id" : 1653936
// };
// console.log(obj);
// console.log(obj.student);
// console.log(obj["id"]);

// this keyword ka use us lie kar tay hai k jo object k andar properties hai us ka use kar saktay ho aik object k andar

// normal function may this keyword kaam kar raha us tara say
// let obj = {
//   name: "alpha",
//   greet: function() {
//     console.log(`hello how are you ${this.name}`);
//   },
// };
// obj.greet(); // hello how are you alpha

// fat arrow fuunction may this keyword kaam nahi kar raha
// tu apko object ka naam use karna paray ga
// let obj = {
//   name: "alpha",
//   greet: () => {
//     console.log(`hello how are you ${obj.name}`);
//   },
// };
// obj.greet(); // hello how are you alpha

// aonther way
// let obj = {
//   name: "alpha",
// };
// obj.greet = function () {
//   console.log(this);
// };
// obj.greet();

// Object Methods
// or yahi project may hi hota hai

//  Object.keys(obj)
//  Object.values(obj)

// let obj = {
//     name : "alpha",
//     age: 21,
// };
// console.log(obj);//output { name: 'alpha', age: 21 }

// let keys = Object.keys(obj);
// console.log(keys);//output [ 'name', 'age' ]

// let value = Object.values(obj);
// console.log(value);//output [ 'alpha', 21 ]

// yaha par of loop use nahi kar saktay for in loop use kaor gy q k ap ko key par iterrate karna hota hai
// for(let test in obj){
//     console.log(test);
// }
//output 'name'
// 'age'

// tu for in loop par key oper mila tu value b mil sakta hai object may
// let obj = {
//     name : "salman",
//     "age" : 21,
//     course : "MERN Stack"
// };
// for(let key in obj){
//     console.log(obj[key]);
// };
//output 'salman'
// 21
// 'MERN Stack'

// tu yaha par for loop jo hai value par iterate karta hai us ko use nahi kar saktay or map forEach filter reduce wo b use nahi kar saktay q  k wo specifically array k lie hai

// entries(); array may convert kar k deta hai array b key value pair ka. tu key value b array may rehta hai nested array hota hai basically
// let obj = {
//     name :"alpha",
//     age : 24,
//     course : "IT",
// };
// let entires = Object.entries(obj);
// console.log(entires); // output [ [ 'name', 'alpha' ], [ 'age', 24 ], [ 'course', 'IT' ] ]

// Object.assign(); object ka agar copy banani hai
// us tara b bana saktay ho spread operator say
// let obj = {
//   name: "alpha",
//   age: 24,
//   course: "IT",
// };
// let copy = {...obj};
// console.log(copy); // output { name: 'alpha', age: 24, course: 'IT' }

// let obj = {
//     name: "alpha",
//     age: 24,
//     course: "IT",
//     };
// let copy = Object.assign({},obj);
// console.log(copy); // output { name: 'alpha', age: 24, course: 'IT' }

// Object.freeze(); say freeze ho ta matlab bad may ap koyi value nahi dal saktay koyi prorety add nahi kar saktay or remove b nahi kar saktay
// let obj ={
//     name : "alpha",
//     age: 21
// }
// Object.freeze(obj);
// console.log(obj); // output { name: 'alpha', age: 21 }

// again try yaha city dal raha ho nahi dal pa raha delete b nahi kar sakta or modify b nahi kar sakta

// let obj ={
//     name : "alpha",
//     age: 21
// }
// Object.freeze(obj);
// obj.city = "karachi";
// delete obj.name;
// obj.name = "salman khan";
// console.log(obj); //output { name: 'alpha', age: 21 }

// Object.seal() na koyi property delete karta hai na hi add karta hai balka existing property ko change karta sakta hai

// let obj ={
//     name : "alpha",
//     age: 21
// };

// Object.seal(obj);
// obj.name = "salman";
// obj.city = "salmo";
// delete obj.name;

// console.log(obj); //output { name: 'salman', age: 21 }

// obj.hasOwnProperty(); ye ap ka answer yes or no may dy raha hota hai jaisay string may or array may includes ta
// asal may ye batata hai ye proprety present hai ya nahi
// let obj ={
//     name : "alpha",
//     age: 21
// };
// console.log(obj.hasOwnProperty("name"));//output true

// Destructuring Object
// let obj = {
//   name: "salman",
//   city: "karachi",
// };
// ya oper hum nay structure create kar liya
// ab us ko alag specificilly tarique say nikal b sakty hai
// let { name, city } = obj;
// console.log(obj);//output { name: 'salman', city: 'karachi' }
// console.log(name,city);//output [ 'salman', 'karachi' ]

// again try
// let obj = {
//     n:"salman khan",
//     subject : "S P",
//     age : 23
// };
// let {n,subject,age} = obj;
// console.log(n,subject,age);//output [ 'salman khan', 'S P', 23 ]

// Array k lie b same hai
// dekhy object may jo key ti wahi deni hoti hai agay laken aad rakhna array us tara nahi hota kush b name do variable ki tara treet kar saktay ho

// let arr = ["sal",12,23.4,"salman","something",{name:"salman"}];

// let [nobal,digit,item1,item2,item3,item4,obj] =arr;
// let [nobal,,,item2,,item4,] =arr;
// console.log(arr)//output Array(6) [ 'sal', 12, 23.4, 'salman', 'something', { name: 'salman' } ]
// console.log(arr); //output Array(6) [ 'sal', 12, 23.4, 'salman', 'something', { name: 'salman' } ]

// acha array may sequence matter kar ta hai name metter nahi karta
// acha object may name metter kar ta hai sequence matter kar ta hai
// tu code ka need and clean hona or performance better hona zaroori hai

// Qno1: Create a person object with properties name ,age and city then
// a)log each property as value of the name property is Salman using Loop
// b) Add a new property called email to a person object
// c) Delete city property from person object

// let person = {
//     name : "Salman",
//     age : 24,
//     city : "karachi",
// };
// for(let key in person){
//     console.log(`value of ${key} and is ${person[key]}`)
// }
// person["email"] = "sulemanafanadi18@gmail.com";
// console.log(person);
// delete person["city"];
// console.log(person);

// Question 2: create a function that take an object with firstName, middleName, lastName properties and return the fullName
// let obj = {
//   firstName: "salman",
//   middleName: "afandi",
//   lastName: "khan",
// };
// let convertToFullName = (param) => {
//     console.log(param);//output { firstName: 'salman', middleName: 'afandi', lastName: 'khan' }
//     return `FullName is ${param.firstName} and MiddleName is ${param.middleName} and also last is ${param.lastName}`
// };
// // convertToFullName(obj);
// let fullName  = convertToFullName(obj);
// console.log(fullName);

//Qno3:  Write a function that takes object and returns the number of properties in an object

// let obj = {
//   name: "salman",
//   age: 23,
//   city: "karachi",
//   married: true,
// };
// let newObj = Object.keys(obj).length;
// // let newObj = Object.values(obj);
// console.log(newObj);

//Qno4: Write a function date return and array of names of user who have the role admin
// let arr = [
//   { name: "salman", role: "admin" },
//   { name: "usman", role: "admin" },
//   { name: "ayan", role: "user" },
//   { name: "super", role: "admin" },
// ];
// let filterItem = arr.filter((elem) => {
// //   console.log(elem);
//   return elem["role"] === 'admin';
// });
// let result = filterItem.map(elem=>{
//     return elem["name"]
// })

// console.log(filterItem);
// console.log(result);

// another ways

// let users = [
//   { name: "salman", role: "admin" },
//   { name: "usman", role: "user" },
//   { name: "ayan", role: "user" },
//   { name: "faizan", role: "admin" },
// ];

// function filterArr(users,role) {
//   let filteredArr = users.filter((item) => {
//     return item["role"] === role;
//   });
//   let resultArr = filteredArr.map((item) => {
//     return item["name"];
//   });
//   return resultArr;
// };

// let resultArray = filterArr(users,'admin');
// console.log(resultArray); // output [ 'salman', 'faizan' ]

// Qno5: Write a function searchProducts(product,keyword)  that return an array of products whose name includes the given keyword (case insensitive)

// let products = [
//   { id: 1, name: "samsung" },
//   { id: 2, name: "galaxy" },
//   { id: 3, name: "samsung galaxy" },
// ];

// function search(products, searchKeyword) {
//   let filteredArr = products.filter((obj) => {
//     return obj.name.toLowerCase().includes(searchKeyword.toLowerCase());
//   });
//   return filteredArr;
// };
// let done = search(products,"y");
// console.log(done); // output [ { id: 1, name: 'samsung' }, { id: 3, name: 'samsung galaxy' } ]

// Qno6: Write a function groupByPost(cement) that return an object grouping comments by postid:

// let comments = [
//   { postID: 1, comment: "hello" },
//   { postID: 2, comment: "awesome" },
//   { postID: 2, comment: "awesome" },
//   { postID: 3, comment: "Well Done" },
//   { postID: 1, comment: "Thanks" },
// ];
// function groupByPost(comments) {
//   let groupedComments = {};

//   comments.forEach((obj) => {
//     if (groupedComments.hasOwnProperty(obj.postID)) {
//       groupedComments[obj.postID].push(obj.comment);
//     } else {
//       groupedComments[obj.postID] = [obj.comment];
//     }
//   });
//   console.log(groupedComments)
// }

// groupByPost(comments);

//  use destrucuring method

// let comments = [
//   { postID: 1, comment: "hello" },
//   { postID: 2, comment: "awesome" },
//   { postID: 2, comment: "awesome" },
//   { postID: 3, comment: "Well Done" },
//   { postID: 1, comment: "Thanks" },
// ];
// function groupByPost(comments) {
//   let groupedComments = {};

//   comments.forEach((obj) => {
//     let { postID, comment } = obj;

//     if (groupedComments.hasOwnProperty(postID)) {
//       groupedComments[postID].push(comment);
//     } else {
//       groupedComments[postID] = [comment];
//     }
//   });
//   console.log(groupedComments)
// }

// groupByPost(comments);


// Qno7: Write a function buildQuery(params) that returns
// matlab banana hai ap ko url output --> "search=laptop&page=2&sort=price"

// let params = {
//   search: "laptop",
//   page: 2,
//   sort: "price",
// };

// function createURL(params){
//     console.log(`search=${params.search}&page=${params.page}&sort=${params.sort}`);
// };
// createURL(params);

// real way
// let params = {
//   search: "laptop",
//   page: 2,
//   sort: "price",
// };

// function createURL(params) {
//   let url = "";
//   for (let key in params) {
//     url = url + `${key}=${params[key]}&`;
//   }
//   let finalURL = url.slice(0, url.length - 1);
//   return finalURL;
// }
// let url = createURL(params);
// console.log(url);
