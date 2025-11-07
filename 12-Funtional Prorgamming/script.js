// funtional programming ko parnay k lie hum us may function ko both zyada proirity dengy function ka use kar k code ko zyada maintanable banahy gy readable banahy gy or performance oriented bana hen gy ye declerative programming may a ta hai or us impreritve programming b use hoti hai funtional programming may.to funtional programming ka sample matlab ye hai k hum function ko first class citizen den gy yani function ko zayada perioty den gy
// us say ap ko aik better way mil jahy ga
// us say bas ap ka concept build hoga k sahi tariqa kiya hai programming ka
// focus on pure function,immutability,function composition rather than shared state and side effect

/*
imperative  forEach vs declarative forEach
imperative  map vs declarative map
imperative filter vs declarative filter
imperative  reduce vs declarative reduce
imperative  every vs declarative every
imperative  find vs declarative find
sort
*/

// every() tu jab b ap k pass aisa senerio ahy jaha par ap ko saray k saray elements condition fulfiled parehnay chahiye tab waha pay ap every use karo gy matalb

//  saray k saray element agar number hai tu hi hum usay number may consider karen gy othrewise nahi karengy
// return karana zaroori hai
// let arr = [1,2,3,'salman',5,6,7,'khan',9];

// let result = arr.every((elem)=>{
//     return typeof elem === 'number'
// })
// console.log(result); // false
// another ways 

// let arr = [1,2,3,5,6,7,9];

// let result = arr.every(elem=> typeof elem === 'number')
// console.log(result); //true
// return karana zaroori hai agar return nahi kar rahy ho tu us tara likho

//find() tu jab ap ko koyi element check karna hai k ye exist karta hai ya nahi tu find() function k use karna hai agar wo find ho raha ho tu ap ko show ho jahy ga agar nahi ho exist nahi kar raha ho element tu undefind show hoga 
// let arr = [1,2,3,'salman',5,6,7,'khan',99];

// let result = arr.find((elem)=>{
//    return elem === 99
// })
// console.log(result);

// another way

// let arr = [1,2,3,'salman',5,6,7,'khan',99];

// let result = arr.find(elem=>elem === 99)
// console.log(result);
// return karana zaroori hai agar nahi tu us tara b kar saktay ho

// filter() means ap ko agar even number filter karnay hai chahiye tu ap use kar saktay ho
// let arr = [1, 2, 4, 5, 99, 44];

// let newArr = arr.filter(elem => elem % 2 === 0)
// console.log(newArr);//output (3) [2, 4, 44]

// imperative matalb kud ka forEach banana
// let arr = [1, 2, 4, 5, 99, 44];

// function MyForEach(arr) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             outputArr.push(arr[i]);
//         }
//     }
//     return outputArr;
// }
// let result = MyForEach(arr);
// console.log(result)//output (3) [2, 4, 44]

// ab again us ko assign kar saktay ho
// let arr = [1, 2, 4, 5, 99, 44];

// let logicFn = (elem) =>{
//     return elem % 2 === 0 ;
// }

// function MyForEach(logic) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (logic(arr[i])) {
//             outputArr.push(arr[i]);
//         }
//     }
//     return outputArr;
// }

// Array.prototype.MySalman = MyForEach;

// let result = arr.MySalman(logicFn);
// console.log(result)//output (3) [2, 4, 44]

// ab again logic assign karsaktay hai tora change karengy last may even k lie hogaya odd k lie karna hai
// let arr = [1, 2, 4, 5, 99, 44];

// let logicFn = (elem) =>{
//     return elem % 2 === 0 ;
// }

// function MyForEach(logic) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (logic(arr[i])) {
//             outputArr.push(arr[i]);
//         }
//     }
//     return outputArr;
// }

// Array.prototype.MySalman = MyForEach;

// let result = arr.MySalman((elem)=>{
//     return elem % 2  !== 0
// });
// console.log(result)//output (3) [1, 5, 99]

// imperative programming(step by step work it) means how to do it
// let arr = [1, 2, 4, 6, 8];
// let double = [];

// for (let i = 0; i < arr.length; i++) {
//     double.push(arr[i] * 2)
// }
// console.log(double)


// declerative programming (what do you want ap kiya chatay ho)

// let arr = [1, 2, 4, 6, 8];

// let result = arr.map(elem =>elem*2)
// console.log(result)

// functional programming declerative programming ka aik sub part hai so lets start
// aik sir ki bath yaad rakhay 
// functional programming ap ko restrick nahi rakh ta kisi bcheez k lie functional programming ap ko batata hai k ap function ka use kar k us tariqe say sahi tarique say code ko maintain kar k programming kar saktay ho

// Pure functions
// it return the same output for the same input
// function sum(a,b){
//     return a+b;
// }
// let result = sum(9,3);
// console.log(result);

// impure function only testing 
// function sum(a,b){
//      let sum = a+b;
//     console.log(sum);
// }
//  sum(9,4);

// another way impure function
// let total = 0;
// function incre(){
//     total ++; //shared state //side effect //modified external stat
// }
//  let result = incre();
// console.log(result)

//2. Immutability (do not change)
// do not modify existing data instead , return new copies

// example string (immutable)
// let str = 'salman';
// str[0] = 'm';
// let zero = str[0];
// console.log(zero)
// console.log(str);

// example array,object are mutable
// let arr = [2,3,4,6];
// arr[0] = 'Salman';
// console.log(arr) // output (4) ['Salman', 3, 4, 6]

// functional programming kehta hai ap immutabity par focus karo ap array or object ko b immutate kar saktay ho

// let obj = {
//     name: 'Muhammad Suleman'
// }

// function replaceName(name) {
//     obj.name = name;
// }

// console.log(obj)  // output {name: 'Muhammad Suleman'}
// replaceName("Salman")
// console.log(obj); //output {name: 'Salman'}

// ye replace ho gaya funtional programming aviod ho gaya
// functional programming aviod ka bolta hai

// let obj = {
//     name: 'Muhammad Suleman',
//     age: 21
// }

// function replaceName(name) {
//     let newObj = {...obj,name}
//     return newObj
// }
// console.log(obj) //output {name: 'Muhammad Suleman', age: 21} porana wala wahi ka wahi hai
// let replaceObj = replaceName("Salman")
// console.log(replaceObj); //output {name: 'Salman', age: 21}
// // yaha par new object mil raha hai poranay walay may koyi change nahi kar raha hai yaha par new object ki copy banahi

// functional programming ye kehta hai k kuch kuch cheezay immutable hai us ko hum change hi nahi kar saktay laken kuch cheezay jaisay array object ye saray cheezay mutable hai us ko xhange kar saktay  hai laken q k ap functional programming use kar rahy ho tu functional programming us ko aviod karta hai ye kehta hai ap orignal object ye orignal array may koyi change na karo ap changes kaor naya object naya array return karo orignal ko as it is rehnay do ho sakta hai orignal say humay kuch campare karnay ye or b kuch dekhnay ki need par jahy tu oringnal ko kabi change mat karo ap yah naya return karo

// another example array mutable
// let list = ['alu', 'gobi', 'kadu'];

// function vegetable(item) {
//     list.push(item);
// }
// console.log(list)//(3) ['alu', 'gobi', 'kadu']
// vegetable("bengen")
// console.log(list); // (4) ['alu', 'gobi', 'kadu', 'bengen']
// tu us nay orignal array may change kiya 

// another ways
// const list = ['alu','gajar','kaddu'];

// function vegetable(item){
//     const newlist = {...list,item}
//     return newlist;
// }
// console.log(list)
// let result = vegetable('moli');
// console.log(result);
// ye aik pure function hai hum bahar outside state may koyi change nahi kar rahay hai jo item dy rahy hai waha par say return kar rahay hai same input k lie same output milay ga
// yahi humara functional programming hota hai React may yahi sari cheezay bar bar k kar rahy ho tay ho 

// best way last item remove
// us say or immutability samaj a gaya k original cheezo may koyi change nahi karna 
// let arr = ['alu','gobi','kaddu'];

// function removeLastItem(ar){
//     let newArr = ar.slice(0,-1)
//     return newArr;
// }
// let result = removeLastItem(arr)
// console.log(result); //output (2) ['alu', 'gobi']
// console.log(arr); //output (3) ['alu', 'gobi', 'kaddu']

// ❌Aviod shared state(bad)
// Shared mutable state can lead to bugs,especially in async or parallel systems
// let total = 0;

// function addAmount(amount){
//     total+=100;
// }
// addAmount(100)
// console.log(total);

// ✅Aviod shared state
// ap yaha par directly input lo pure function banaho input return karo immutibity par foucus karo
// function add(a, b) {
//     return a + b;
// }
// let result = add(2, 3);
// console.log(result);


// Aviod Side Effect
// Side effects are anything a function does outside its scope (API call,DOM update,modifying global vars)
// BOM say interact karna matlab side ways kuch alag kam karna ye hota hai side effect tu functional programming kehta hai ap side effect ko nahi karoi aviod (khatam ) karo side Effect ko

// ❌Side Effect
// function longMessege(msg){
//     console.log(`hello ${msg}`) // side effect: Inteacts with console so this is a part of bom
// }
// longMessege('salman')


// // ❌Side Effect
// function capitalizedFirstLetter(str){
//     let newStr = str.charAt(0).toUpperCase() + str.slice(1);
//     alert(newStr); // side effect interact with alert so this is a part of bom
// }
// let newStr = capitalizedFirstLetter('salman')

// ✅ No Side Effect
// function getGreeting(msg){
//     return `Hello ${msg}`
// }
// let yes = getGreeting('bahi');
// console.log(yes);

// ✅ No Side Effect
// function capitalizedFirstLetter(str){
//     let newStr = str.charAt(0).toUpperCase() + str.slice(1);
//     return newStr;
// }
// let newStr = capitalizedFirstLetter('salman')
// console.log(newStr)


// Reuse or Compose Logic
// Build small reusable functions and compose them together
// matlab hum ko teen logic use karnay tay hum say usay seperate kar k alag alag use kiya humay aik ki use parti hai aik use karen gy dosray ki use parti hai dosra use karen gy teeno ki conbine use partti hai teeno ko combine way may use karen gy  that is called compose and reuse and compose logic


// ❌
// let name = 'Muhammad Suleman khan';

// function CreateUserName(str){
//     console.log(str.toLowerCase().replaceAll(' ',''));
// }
// CreateUserName(name);

// ✅ Reuse and Compose Logic
// this is reuseable function
// let fname = 'Salman Khan';

// let lower = str => str.toLowerCase();
// let removeSpace = str => str.replaceAll(' ','');
// let addTheRate = str => '@' + str;

// // this is compose logic 'classical compose'
// function createUserName(str){
//     return addTheRate(removeSpace(lower(str)))
// }

// let result = createUserName(fname);
// console.log(result); 
// that is called reuse and compose logic
// this is a funtional programming of power


// 7. Don't Iterate (Imperatively)
// Avoide for, while,etc Use map, filter, reduce

// ❌ Imperative Style Don't iterate
// let even = [];
// for(let n of [1,2,3,4]){
//     if(n % 2 === 0) even.push(n);
// }
// console.log(even); //output (2) [2, 4]

// another ways
// let arr = [1, 2, 4, 5, 6, 7, 8];
// let even = [];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         even.push(arr[i])
//     }
// }
// console.log(even)// (4) [2, 4, 6, 8]

// ✅ Functional Programming Declerative Style 
// const evens = [1,2,3,4].filter(n => n % 2 === 0);
// console.log(evens); //output (2) [2, 4]

// another ways
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((i) => {
//     return i % 2 === 0
// });
// console.log(newArr)


// Loose Coupling 
// Coupling matlab dependency means show karta hai kitni depnedency hai aik function ka dosray function par
// agar zyada dependent hai tu waha par type coupling ho rakhi hai 
// agar kam dependent hai tu waha par loose coupling ho rakhi hai
// functional programming k ander loose coupling par hi focus karty hai
// functional programming kehta hai jitni zyada dependency hogi ap itna achay say say debug nahi kar paho gy
//jitnay zyada bugs a nay k chances agar hongy code readable nahi maintable nahi hoga 
// functional programming rules coupling par fucus karta hai dependency ap ki kam honi chahiye
// Coupling refers to how depentdent one piece of code is an another
// loose coupling means less dependent , keep functions and modules independent

//❌ Tightly Coupling
// function getUser(){
//     fetch('https://www.example.com/user')
// }
// function getProduct(){
//     fetch('https://www.example.com/Product')
// }
// function getReview(){
//     fetch('https://www.example.com/Review')
// }

// ✅ loose Coupling

// let endPoint = 'https://www.example.com';

// function getUser(endPoint){
//     fetch(`${endPoint}/user`)
// }
// function getProduct(endPoint){
//     fetch(`${endPoint}/product`)
// }
// function getReview(endPoint){
//     fetch(`${endPoint}/review`)
// }
// getUser(endPoint);
// getProduct(endPoint);
// getReview(endPoint);
// ab code more readable or maintanable howa ab code change hota hai tu ap ko zyada jaga change karnay ki need nahi parhti sirf vaiable ko change karay q k ap string par dependent nahi variable par dependent hai


// us ko or obtimize b kiya ja sakta hai
// let endPoint = 'https://www.example.com';

// function fetchData(endPointLiya,routeLiya){
//     fetch(`${endPointLiya}/${routeLiya}`)
// }
// fetchData(endPoint, users)
// fetchData(endPoint, prducts)
// fetchData(endPoint, reviews)


// us tara b kar saktay hai
//fetch data higherOrder function hogaya fu kude hi aik function hai callback function hai

// function fetchData(fn){
//     let endPoint = 'https://www.example.com';
//     fn(endPoint);
// }

// function getUser(endPointLylo){
//     fetch(`${endPointLylo}/user`)
// }
// function getProduct(endPointLO){
//     fetch(`${endPointLO}/product`)
// }
// fetchData(getUser);
// fetchData(getProduct);

// so loosely Coupling matlab hum aik jaga change karay tu pora ka pora chage ho jahy debugging asan ho jahy

// notification system

// let user = {
//     name:'salman',
//     email:'sulemanafandi18@gmail.com',
//     phone:1234565
// }

// function sendEmail(email){
//     console.log('Email sent to:',user.email);
// }
// function sendWhatsapp(email){
//     console.log('Whatsapp sent to:',user.phone);
// }
// function sendSMS(email){
//     console.log('SMS sent to:',user.name);
// }


// sendEmail(user)
// sendWhatsapp(user)
// sendSMS(user)

// another ways
// let user = {
//     name: 'salman',
//     email: 'sulemanafandi18@gmail.com',
//     phone: 1234565
// }

// function sendMessege(msg, sendTo) {
//     console.log(`${msg} : ${sendTo}`)
// }

// sendMessege('Email Send To ', user.email)
// sendMessege('WhatsApp Send To ', user.phone)
// sendMessege('Phone Send To ', user.phone)


// another ways real world program

// let user = {
//     name: 'salman',
//     email: 'sulemanafandi18@gmail.com',
//     phone: 1234565
// }
// let user1 = {
//     name: 'usman',
//     email: 'usman18@gmail.com',
//     phone: 1234565
// }
// let user2 = {
//     name: 'ayan',
//     email: 'ayan18@gmail.com',
//     phone: 1234565
// }

// function sendEmail(user) {
//     console.log('Email Send to:', user.email);
// }

// function sendSMS(user) {
//     console.log('SMS Send to:', user.phone);
// }

// function sendWpMsg(user) {
//     console.log('Whaltsapp Send to:', user.phone);
// }

// function sendMessege(user, notifyFn) {
//     console.log('Since You are authorized ');
//     notifyFn(user)
// }
// sendMessege(user1, sendEmail)
// sendMessege(user2, sendSMS)


// First-class & Higher Order Function
// first-classs :Function can be stored in variable , passed, and returned
// Higher-order : Function that take other function as arguments or return them

// so first - class function apka normal function hi hota hai jitnay b function hai ap k first-class function may a tay hai

// function greet() {
//     return 'Hello'
// }

// function greetWithName(name) {
//     return greet() +" "+name;
// }
// let result = greetWithName('Salman');
// console.log(result)
// yaha par function ko hum nay fixed kiya hai greet function hi pass karna hai us ko



// another way
// function greetHello() {
//     return 'Hello'
// }
// function greetSalman() {
//     return 'Asslam walikum'
// }

// function greetWithName(fn, name) {
//     return fn() +" "+name;
// }
// let result = greetWithName(greetHello,'Salman');
// let result1 = greetWithName(greetSalman,'Salman');
// console.log(result)
// console.log(result1)
// yaha par function ko hum nay function ko fixed nahi kiya hai 

// Important 
// higher Order function wo function haijo kude k andar aik function ly raha ho as a parameter ly raha ho tu oper greetWithName() ye wala higher order function hai Q K ye apnay ander b aik function ly raha hai as a parameter
// Callback function wo function hota hai jo kisi higherOrder function k andar hi pass kar rahy hotay hai tu greetHello tu us ko hum nay higherOder Function greetWithName k andar hi pass kiya hai or fn b callback function hai q k us b greetWithName k andar pass kiya hai
// or oper greetHello or greetSalman ye apka first-class function hai tu jo b normal function hotay hai ap k first-class functionhotay hai tu defination ye hai k jis ko hum store kar saktay hai kisi variable may ya or jis ko pass kar saktay hai kisi function k andar or ya jis ko return karaya ja sakta hai
// higher order function wo hotay hai k jo dosray function ko as a arugement ly raha hota hai ye return kar raka hota hai ab return karo ya na karo laken doray function ko as a argument ly raha hota hai
// callback function wo function hota hai jo us higher order function may pass kar rahay ho wo callback hai

// first class function ap ka super set hai or firsr class function may hi higher order function a tay hai or first class function k andar hi ap k callback function a tay hai tu definitly saray k saray higher-order function hi ap k first-class-function hai q k higher-order function ko hum variable may save kara saktay hai or higher-order function ko hum dosray function may b pass kar skatay hai dosray function may return kar k pass kara saktay hai or callback function b first-class function may a ta hai callback function ko ap nay pass kiya us ko hum variable may store kara saktay hai or return b kara saktay hai or dosray function may b pass kara saktay hai tu callback function b apka first-class function hai

// kiya saray k saray function ap k higher-order function hon gy . nahi ho sakta hai k first class function koyi ap ka callback function na ly raha ho tu jo b aisay function jo apnay andar koyi function nahi ly rahay ho tay hai us a parameter as a argument tu wo ap k higher order function nahi hotay wo ap k normal function hotay hai
// tu saray k saray ap ap ka first-class function ap k higher order function ho aisa zoorori nahi hai ya saray k saray first-class function ap k callback function aisa koyi zaroori nahi hai
// laken saray k saray higher order function ap k first-class function b hongy saray k saray callback function apky first-class function b hongy 


// Question 1
// 1. What is a pure function, and why is it useful in UI rendering?
// Answer
// pure function same input k lie apko same output har bar ap ko produce kar raha hoga yaha ap ka side effect nahi ho raha hoga koyi shared state nahi ho raha hoga 
// ab UI k lie q use karty hai sab say pehlay tu predictibility matlab (kiya cheezay ap kibender honay wali hai us k baray may ap ko pata hota hai same wahi UI reder hoga jo b ap nay predict kiya hai jo ap array diya ho us array ko ap render kar rahay ho map etc ka use kar k wahi ap ka UI hoga q k ap side effect wagira kuch nahi kar rahay ho ) ap aisayni say kar rahy ho ap debug aisany say kar rahay ho both zyada simple hota hai maintane hota hai or easy to read wagira yaha sari cheezay hai jo ap pure function say kar saktay ho tu jo b ap functional programming may kar rahy tay us say ap pure function hi build kar rahy tay both sari cheezay avide (khatam) kar rahay tay tu yahi cheezay UI rendering both zyada usefull hoti hai 


// Question2
// 2. How would you use .map() to transform a list of products into a list of HTML elements?
// let users = [{
//         fname: 'salman',
//         class: 'MERN Stack'
//     },
//     {
//         fname: 'salman',
//         class: 'MERN Stack'
//     },
//     {
//         fname: 'salman',
//         class: 'MERN Stack'
//     }
// ];
// let transformedHTML = users.map((obj) => {
//     html = `
//     <div>
//     <p>{obj.fname}</p>
//     <p>{obj.class}</p>
//     </div>
//     `
//     return html;
// })


// Question 3:
// 3. How do you use .reduce() to calculate the total price in a shopping cart?
// let arr = [5, 6, 8, 6];

// let result = arr.reduce((accumolator, current) => {
//     console.log(accumolator, current)
//     return accumolator + current;
// }, 0)


// Question 4;
// 4. Explain immutability and how you would update an object in an array without mutating the original.

// This is mutated(change)
// let user = {
//     name:'Muhammad Suleman',
//     age:21
// }

// function updateName(users, name){
//     users.name  = name
// }
// console.log(user)
// updateName(user,'salman')
// console.log(user)

// Imutable no change real example
// let user = {
//     name:'Muhammad Suleman',
//     age:21
// }

// function updateName(users, names){
//    let newobj =  { ...users, name:names} 
//    return newobj
// }
// console.log(user)
// let newUpdated = updateName(user,'salman')
// console.log(newUpdated)
// console.log(user)


// Question5
// 5. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
// capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
// composition, chaining, pipe or compose logic.)

// let str = 'salman';
// let reverseStr = str.split('').reverse().join('')
// console.log(reverseStr)

// let add2 = num2 => num2 + 2;
// let multiply5 = num => num * 5;
// let subtruct10 = num => num - 10;
// // classic compose
// let result =  subtruct10(multiply5(add2(6)))
// console.log(result)


// compose -> right to left
// pipe -> left to right


// // compose function 

// let add2 = num2 => num2 + 2;
// let multiply5 = num => num * 5;
// let subtruct10 = num => num - 10;

// function compose(...fns) {
//     return function (val) {
//         return fns.reduceRight((acc, currfn) => {
//             return currfn(acc);
//         }, val)
//     }

// }
// let result = compose(subtruct10, multiply5, add2)(6);
// console.log(result);


// // pipe function

// let add2 = num2 => num2 + 2;
// let multiply5 = num => num * 5;
// let subtruct10 = num => num - 10;

// function pipe(...fns) {
//     return function (val) {
//         return fns.reduce((acc, currfn) => {
//             return currfn(acc);
//         }, val)
//     }

// }
// let result1 = pipe(add2, multiply5, subtruct10)(6);
// console.log(result1);


// Question 6:
// 6. What is the difference between forEach and map, and when is it wrong to use map?

//forEach ap ko tab use karna hai jab ap ko naya array bananay ki zaroorat nahi ho ya new array ap ko nahi banana tu ap direct forEach use karlo ap ko DOM k sath manipulate karana hai or return nahi karana chaaty ho tu ap waha par forEach use karo or waha par forEach use hoga auccully forEach use hoga  
// nodelist k sath ap waha array k method apply nahi karsak tay ap convert kar k array k method apply kar saktay ho tu ap ko waha forEach lagana hi paray ga map use nahi kar saktay 
// forEach jo hai kuch b return nahi karta hai 
// map jo hai operation perform kara k jo b ap ka result aya hai us ko ap return kara saktay ho tu ye ap ka naya array return karata hai operation k basis par kam kar k ap naya array return kara saktay hai double karna hai kardy ga new array return kar dy ga
// forEach and map dono k dono hi ap k original array may change nahi karty main difference ye hai k forEach ap ka return nahi karta hai map ap ka return karta hai 


// Question 7:
// 7. How do you implement your own version of .map() function on arrays?

// let arr = [1, 2, 3, 4, 6];

// function square(arr) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(arr[i] * arr[i])
//     }
//     return outputArr;
// }

// function diameter(arr) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push( 2 * arr[i])
//     }
//     return outputArr;
// }

// function cube(arr) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(arr[i] * arr[i] * arr[i])
//     }
//     return outputArr;
// }


// let diameterArr = diameter(arr);
// let resultArr = square(arr);
// let resultArr1 = cube(arr);
// console.log(resultArr);
// console.log(resultArr1);
// console.log(diameterArr);



// apna Map() function banana hai

// let arr = [1, 2, 3, 4, 6];

// let squareLogic = (r) => {
//     return r * r;
// }

// let cubeLogic = (r) => {
//     return r * r * r;
// }

// let diameterLogic = (r) => {
//     return r * 2;
// }

// let Calculate = function (logicFn) {
//     let outputArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         outputArr.push(logicFn(arr[i]))
//     }
//     return outputArr;
// }

// Array.prototype.salmanMap = Calculate;


// let result2 = arr.salmanMap(squareLogic);
// console.log(result2);


// let result1 = arr.salmanMap(cubeLogic);
// console.log(result1);


// let result = arr.salmanMap(diameterLogic);
// console.log(result);