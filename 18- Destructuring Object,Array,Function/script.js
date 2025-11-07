// Destructuring
// aik object aik structure hi tu hai proper jaha key-value pair may hum store kar rahay hotay hai tu us ko hum de Structure kar dengy aik single single variable may ta k har jaga use kar pahy usay or aik array hai structure form may us ko may aik save kar k use karo or agar multiple variable ko use karna hai tu multiple variable may save kar k use karo tu both saray tariqay hai but destructuring walay tariqa sab say best hai

// let obj = {
//     name:'Salman',
//     streetAdress:'landhi',
//     isMarried:false
// }
// console.log(obj.name);
// console.log(obj['streetAdress']);
// console.log(obj.isMarried);
// tu samaj lo obj may both sari key,value hai or humay shoro k do multiple places par use karni hai tu as tara kam nahi kar saktay hai tu acha tariqa ye hai k q na hum usay destructure kar ly pehlay matalb aik varable may store kar ly name name ka variable bana k us variable ko hi har jaga use karay

// let person = {
//     name:'salman',
//     lname:'khan',
//     class:'MERN Stack'
// };

// let name = person.name;
// let lname = person.lname;
// let classe = person.class;
// console.log(name);
// console.log(lname);
// console.log(classe);
// abi b ye proper kam karay ga but yaha par us say or proper tariqa a ta hai destructuring ka 

// // Thats is called Destructuring 
// let person = {
//     names:'salman',
//     lname:'khan',
//     classs:'MERN Stack',
// };
// let {names,lname,classs} = person;

// console.log(names)
// console.log(lname)
// console.log(classs)


// Thats is called Destructuring 
// let person = {
//     names:'salman',
//     lname:'khan',
//     classs:'MERN Stack',
//     address:{
//         city:'karachi',
//         PinCode:742014
//     }
// };
// let {names,lname,classs,address:{city,PinCode}} = person;

// console.log(names)
// console.log(lname)
// console.log(classs)
// console.log(city)
// console.log(PinCode)



// usi tara array ko b destructure karty hai

// let arr = [1,2,3,4,5];

// let [a,b,c,d,e]=arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// // another ways
// let arr = [1,2,3,'salman','khan'];

// let [a,b,c,d,e]=arr;
// console.log(a,b,c,d,e)

// Destructuring
//  destructuring is a javascript expression used to unpack value from array or properties from objects into distinct variable

// javascript expression means l.h.s = r.h.s

// Think of it like unpacking a structure

// const [a,b] = [10,20];
// console.log(a);
// console.log(b);

// const [name,age] = ['salman',21];
// console.log(name,age)


// Destructuring Array

// Basic Destructuring

// const numbers = [1,2,3,'salman',false];
// const [first,second,thrid,,other] = numbers;

// console.log(first);
// console.log(second,thrid);
// console.log(other);

// Destructuring with rest operator

// const arr =[1,2,3,4,5];
// const[a,b,...rest] = arr;
// console.log(a);
// console.log(b);
// console.log(rest);

// Default Value

// const [x = 1, y = 2] = [10];
// console.log(x);
// console.log(y);

// // anohter way

// let [a, b, c = 'salmo'] = [12, 'salman', 20];
// console.log(a, b, c);


// Skip Array items

// let [first, , third] = [10, 20, 30];
// console.log(first);
// console.log(third);

// another way

// let [, , ,e , , d] = [1,2,32,63,5,3,52,6];
// console.log(d);
// console.log(e);


// Swap matlab a k andar b ka value a gaya or b k andar a  ka value a gaya pehlay us tara karty tay
// let a = 5; b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b);


// Swapping values using Destructuring method
// let a = 5; b = 10;
// [ a , b ] = [ b , a ];
// console.log(`a = ${a} , b = ${b} `);
// console.log(a,b);


// Nested Destructuring Array
// let [a, , , d] = [1, 2, 3,[5,6]];
// console.log(a);
// console.log(d);

// another way
// let [a, , , d] = [1, 2, 3, [5, 6]];
// let [x, y] = d;
// console.log(a);
// console.log(d);
// console.log(x, y);

// another way
// let [a, , ,[x, y]] = [1, 2, 3, [5, 6]];
// console.log(a);
// console.log(x, y);

// tu array place k hisab say kam karta hai ya koyi b name dy kam chalta ta or us may ye hota hai k kis index par kiya hai agar a first index par hai or 1 first index par hai tu a may 1 chala jata ta no matter ap variable ka kiya name dytay ho .object may aisa nahi hota

// Destructuring Objects
// object key value basis par kam karta hai tu object may siraf dihan key ka rakhna hota hai  name ka dihan rakhna hota hai same name use karna hai baqi ap rename kar saktay ho yaha rename k b concept a ta hai 

// Basic Destructuring
// const obj = {name:'salman',age:21};
// const {name,age} = obj;
// console.log(name,age);

// Destructuring with rest operator
// let obj = {name:'salman',age:21,class:'MERN Stack'};
// let {name,...result} = obj;
// console.log(name);
// console.log(result);

// default values
// let {name,field,age=21} = {name:'salman',field:'MERN Stack'};
// console.log(name,field,age);

// another ways
// let {name,age,field='MERN Stack'} = {name:'salman',age:21}
// console.log(name,age,field);

// Renaming Varaibles Destructuring
// let obj = {names:'salman khan',age:21};
// let {names:fullname,age:years}=obj;
// console.log(fullname,years);


// anohter way
// let {name:fullname}={
//     name:'salman'
// }
// console.log(fullname);


// Nested Object Destructuring

// let obj = {
//     name: 'Salman khan',
//     age: 21,
//     address: {
//         city: 'karachi',
//         pincode: 123421,
//         arr: [1, 2, 4, 5, 6]
//     }
// }

// let {
//     name: fullname,
//     age,
//     address:{pincode:code,arr}
// } = obj;
// console.log(fullname);
// console.log(age);
// console.log(code);
// console.log(arr);

//so Array ko position ya index k basis par destructure kar saktay ho or object may key k basis par kam kar saktay ho tu yaha key name both zyada important hai halan k ap rename b kar saktay ho 


// Destructuring in Function Parameter

// Array in Parameter

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(2,4);
// console.log(result);

// another way

// function sum(a, b) {
//     return a + b;
// }
// let a = 12, b = 12;
// let result = sum(a,b);
// console.log(result);

// // another way
// function sum(a, b) {
//     return a + b;
// }
// let a = [10,5]
// let result = sum(a[0],a[1]);
// console.log(result);

// // another way in react usecase
// function sum([a, b]) {
//     return a + b;
// }
// let a = [10, 5]
// let result = sum(a);
// console.log(result);

// // in Object 
// function greet(name,age){
//     console.log(`hello ${name},your age is ${age}`);
// }
// greet('salman',21);


// // in Object 
// function greet(name,age){
//     console.log(`hello ${name},your age is ${age}`);
// }
// let obj = {
//     name:'salman',
//     age:21
// }
// greet(obj.name,obj.age);


// in Object destructuring in parameter real world react usecase
// function greet({name,age}){
//     console.log(`hello ${name},your age is ${age}`);
// }
// let obj = {
//     name:'salman',
//     age:22
// }
// greet(obj);


// Question 1
// what will be the output?

// let arr = [12,4,6,3];
// let obj = {...arr};
// console.log(obj);//output {0: 12, 1: 4, 2: 6, 3: 3}


// Question 2
// 2. How does using spread help avoid mutation? Modify the object without affecting the original?

// let obj = {name:'salman',age:21};
// let copyObj = {...obj,city:'karachi'};
// console.log(copyObj);//output {name: 'salman', age: 21, city: 'karachi'}


// Question 3
// 3. Write a function that take numbers as argument and separates even and odd numbers and return an object with evens and odds and destructure the output while calling function.

// function seperateEvenOdd(...arr) {
//     let even = arr.filter(item => {
//         return item % 2 === 0
//     })
//     let odd = arr.filter(item => {
//         return item % 2 !== 0
//     })
//     return {
//         even,
//         odd
//     }
// }
// let {
//     even,
//     odd
// } = seperateEvenOdd(1, 2, 3, 4, 5, 6, 1, 2, 322, 2);
// console.log(even); //output (6) [2, 4, 6, 2, 322, 2]
// console.log(odd); //output(4) [1, 3, 5, 1]



// Question 4
//4. Create a custom JavaScript function that behaves like React’s useState.
// The function should:
// o Store a value (like state).
// o Return two things: the current value and a function to update it.
// Use array destructuring to extract both the value and the setter when calling your function.

function useState(initialValue) {
    let value = initialValue;

    function setValue(val) {
        value = val
    }
    
    function getValue(val) {
        return value;
    }

    return [getValue, setValue];
}

let [getCount, SetCount] = useState(0);
console.log(getCount());
SetCount(5);
console.log(getCount());
