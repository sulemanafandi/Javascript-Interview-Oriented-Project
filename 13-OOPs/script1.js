// Programming Paradigm means way of Programming
// OOPs is way of Programming so Programming Paradigm

// Date is based classes and Studentject
// let date  = new Date()
// console.log(date);
// datek andar different different method and properties exists karty hai
// console.log(date.toLocaleString());
// ab ye internal both zyada logic laga raha hoga humay pata nahi hai
// tu Object Oriented Programming yahi focus karta hai k ap ko use ke lie dy raha hai ab bas use karo internal detail hide karta hai encapsulate karta hai abstruct karta hai security provide karta hai ap ko siraf itna part dyta hai jo k ap use karo aisani say
// ahgy promises paro gy wo b classes and oject par based hai
// tu array jo hai wo b constructor function hai typeof Array laken ap us tara say do gy typeof [] tu ap ka object a raha hai 

// let Student = {
//     fname :'salman',
//     lname:'khan', //property (wo hota hai jis may kuch na kuch info set kar saktay ho infomation bata raah hota hai kuch kam rahi karta us information ko ap set b kar saktay ho get b kar saktay ho )
//     introduceMyySelf: function(){   // Method (kuch na kuch kam kar raha hota hai internally kuch na kuch logic par kam kar raha hota hai tu object k andar function ko method bolty hai)
//         console.log(`Hello`)
//     }
// }
// console.log(Student);
// tu simple obj ko banaya us may property or method banahy object name Student diya Student name first letter S hum nay capital diya production approch hai acha lagata hai naming convention ap keh saktay ho tu class and Obect may capital may likhna preffer karty hai jis cheez k lie jo standard approch hai wahi hum b follow karen gy


// object k anaar ki properties ko object k undar hi use karnay k lie this keyword use karna hota hai
// let Students = {
//     fname :'salman',
//     lname:'khan', 
//     introduceMyySelf: function(){  
//         console.log(`Hello My name is ${this.fname} and last name is ${this.lname}`);
//     }
// }
// Students.introduceMyySelf();


// tu asal may us may arrow function use nahi kar saktay 
// tu jis b object k method ko hum call kar rahy hai or us method k andar jo hum nay this likha hai tu wo this us object ko represent karey ga jis k andar method hai  
// let Students = {
//     fname: 'salman',
//     lname: 'khan',
//     introduceMyySelf: function () {
//         console.log(this);
//     }
// }
// Students.introduceMyySelf();

// ab problems suno hum ahgy q paray hum logo nay constructor function classes and Object wala syntax q laya javascript may q introduce kiya kiya parayshani ti aiysai .
// tu parayshani ya ti multiple students bananay hai oper aik student hai us taraiqay k multiple student bananay hai or function(method) jo object may hai wo nahi change honay wala hai fname ,lname change hoga q k both saray student k banana hai to pir ap aik fuction bananay k us  sab object k method may reference pass karengy or object.method ko call karen gy wo tu chal jahy ga laken wo functional programming may chala jahy ga humay OOPs parna hai tu humay object ko alag alag object ko create karnay ki need hi nahi parhti hum siraf aik object banatay us say multiple instance create kar patay or use karay tu function method property banahy gy sab object k andar rep hoga object ko use karna hai object ko bananay ka tariqa sikhna hai object may sari cheezay bond karni hai usi ko kehtay hai Object Oriented Programming kuch naya karna bilkul nahi hai wahi sari cheezay use karen gy wahi string wahi object wahi function sab wahi use karen gy alag jo hai wo bas programming ka tariqa hoga bas

// literal Object say hum instance create nahi kar saktay dosra object banana hoga tu dosra object create karna hoga ye usi ko hi replicate karna hoga aik bar hi may aik hi oject create hogo us say koyi instance create nahi kar sakty tu us ko hum singleton object b bolty hai 
// tu object literal aik tariqa hai object bananay ka but ye proper tariqa nahi hai q k us say hum multiple object (instance ) create nahi kar saktay tu humay pass a ta hai Factory Function 


// Factory function say hum multiple object create kar saktay hai

// Factory function that returns a new object
// Great for creating multiple similar objects without classes

// pehla ki tara example k tor par aik function liya 
// let Students = {
// fname: 'salman',
// lname: 'khan',
// passion:'bugati',
// introduceMyySelf: function () {
//     console.log(`${this.fname}, ${this.lname}, ${this.passion}`);
//     }
// }
// Students.introduceMyySelf();


// Factory function banaya us may hum parameter ly saktay hai 
// function Student(myname,lname,passion) {
//     return {
//         fname: myname,
//         lname: lname,
//         passion, // us tara b kar saktay ho key value agar same ho aik bar likhay 
//         introduceMyySelf: function () {
//             console.log(`${this.fname}, ${this.lname}, ${this.passion}`);
//         }
//     }
// }
// let s1 = Student('salma','kha','cooking');
// console.log(s1); //output {fname: 'salma', lname: 'kha', passion: 'cooking', introduceMyySelf: ƒ}
// s1.introduceMyySelf(); // output salma, kha, cooking

// faida us say ye howa k ab humay bar bar replicat karne ki need nahi hai ab humay dosra object b usay say create kar saktay hai same student function ko call kar k kuch b kuch b object may pass kar saktay hai 


// function Student(myname,lname,passion) {
//     return {
//         fname: myname,
//         lname: lname,
//         passion, // us tara b kar saktay ho key value agar same ho aik bar likhay 
//         introduceMyySelf: function () {
//             console.log(`${this.fname}, ${this.lname}, ${this.passion}`);
//         }
//     }
// }
// let s1 = Student('salma','kha','cooking');
// let s2 = Student('suleman','afandi','developer');
// // console.log(s1); 
// console.log(s2); 
// s1.introduceMyySelf(); 

//  tu hum aik object ka use kar k multiple object ki instances create kar pah rahy hai


// Doesnot involve prototypes by default (unless you manually set them)

//  bas factory function say proper object bana pah rahy tay parameter pass kar rahy tay yaha par parameter send kar rahy ty or return kar raha ta aik object usi ko kehtay hai foctory function
// bas diyan ya rakhna ye prototype involve nahi karta hai prototype set nahi karta hai bydeault set ka nahi hota yaha par maniuallly saet karna hota hai jo k aik sahi tariqa nahi hai tu hum factory function b use nahi karty definatly q k prototype both zyada useful hai 
// Javascript tu prototypical based language hai 
// tu javascript may jo khal ho raha hai wo prototypical ka khal ho raha hai


// 3- Consturctor Function

//uses hte new Keyword
// Before class syntax was introduce in ES6 this was the standard way to create 'object blueprints
// Automatically set up a link to student prototype

// node terminal may this keyword ka output object a raha hai
// console.log(this) //ouput {}
// or brower may window Object a raha hai  

// agar hum us tara karay
// this aik kali object hai us k andar koyi b key value pair ap add kar saktay ho
// this.name = 'salman';
// this.age = 21;
// this.course = 'MERN Stack';
// console.log(this); // output { name: 'salman', age: 21, course: 'MERN Stack' } in terminal 
// bowser output Window {window: Window, self: Window, document: document, name: 'salman', location: Location, …}


// function Student(){
//     console.log(this)
// }
// Student(); //output Window {window: Window, self: Window, document: document, name: 'salman', location: Location, …}


// function Student(){
//     console.log(this.name = 'salman')
// }
// Student(); //output salman

// function Student(fname, lname) {
//     this.name = fname
//     this.lname = lname
//     return this;
// }
// let result = Student('salman Khan', 'Mehsud'); //output salman Khan Mehsud
// console.log(result);

// ye tu proper chal raha hai 

// function Student(fname, lname) {
//     this.name = fname
//     this.lname = lname
//     return this;
// }
// let result = Student('salman Khan', 'Mehsud'); //output salman Khan Mehsud
// let result1 = Student('salo','bahi','123'); //output salman Khan Mehsud
// console.log(result);
// console.log(result1);
// yaha dono may salo bahi a raha hai


// yaha par ap new keyword ka use karay pir sahi ahy ga
// new keyword ap ko bata raha hota hai k ap ko pora ka pora naay memory alocation karna hai matlab naay object banana hai  jo b cheez ap create kar rahy ho wo sari value dalni hai or wo ap ko return kar na hai 
// function Student(fname, lname) {
//     this.name = fname
//     this.lname = lname
//     return this;
// }
// let result = new Student('salman Khan', 'Mehsud');
// let result1 = new Student('salo', 'bahi');
// console.log(result); //output Student { name: 'salman Khan', lname: 'Mehsud' }
// console.log(result1); //output Student { name: 'salo', lname: 'bahi' }

// or Student b a raha hai ye bataraha hai student constructor function say humnay pora object create karliya 
// tu new keyword lagana zaroori hai or internally javascript yahi construtor function use karta hai classes or object ka syntax tu ES6 k bad aya hai or acutally us may b khas bath hai jo k construtor function may directly nahi han but jo calss and object ka jo syntax hai wo syntatic suger hai basically aik bariya syntax ap ko diya hai javascript kisi say pichy nahi hai 

// clas Syntax (ES6) may aya hai
// us may let var const nahi lagaty let ap ka scope use karta hai k kaha tak defined hai or class ka yaha kud ka scope hai tu yaha nahi lagatay funtion k lie b function keyword k use nahi karna nahe do q k scope ap ka class defined karay ga let wagiray nahi detay acha us ko call karnay k lie new keyword ka use karo gy or internally ya constructor function ka use karta hai or naya object b bana saktay hai


// class Student{
//     name = 'Salman';
//     age = 21;
//     passion = 'developer';
// }
// let s1 = new Student();
// let s2 = new Student();
// console.log(s1); //output Student {name: 'Salman', age: 21, passion: 'developer'}
// console.log(s2) //output Student {name: 'Salman', age: 21, passion: 'developer'}

// acha us may tu parameter b nahi ly saktay class hai ye
// tu class may intilaze kar nay k lie byDefault ap ko aik construtor function milta hai
// ab constructor function ka use kar k initalize kar saktay ho 
// hum parameter constructor may dengy or this keyword ka use karen gy

// class Student1 {
//     constructor(name, age, passion) {
//         this.fname = name;
//         this.Myage = age;
//         this.Course = passion;
//     }
// }
// let s2 = new Student1('salo', 21, 'developer');//output Student1 { fname: 'salo', Myage: 21, Course: 'developer' }
// let s3 = new Student1('salman',22,'MERN Stack');// Student1 { fname: 'salman', Myage: 22, Course: 'MERN Stack' }
// console.log(s2);
// console.log(s3);
// // tu us tara hum jab b instance ko create karen gy tu constructor function call hoga hi hoga  

// or calss may method b ap inttroduce kara saktay ho 

// class Student1 {
//     constructor(name, age, passion) {
//         this.fname = name;
//         this.Myage = age;
//         this.Course = passion;
//     }
//     introduce(fname, Age, Passion) {
//         console.log(this.fname, this.Myage, this.Course)
//     }
// }
// let s2 = new Student1('salo', 21, 'developer');
// let s3 = new Student1('salman', 22, 'MERN Stack');
// console.log(s2);
// console.log(s3);
// s2.introduce();

