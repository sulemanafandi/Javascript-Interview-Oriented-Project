// Spread and rest operator 
// both use three dots (...) syntax but do different thing based on context .
// spread operator expands/unpack value 
// rest operator collects/pecks value

// tu definetily aik operator hai tu use k hisab say hum usay kabhi spread boltay hai or kabhi rest boltay hai

// spread ap ka expend matlab pilanay ka kam karta hai unpack karnay k kam karta hai
// Rest ap ka collect matlab aik jaga jama karna ka kam karta hai pack karnay ka kam karta hai 

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1); //output (5) [1, 2, 3, 4, 5] so packed value

// // Spread
// let arr = [1, 2, 3, 4, 5];
// console.log(...arr); //output 1 2 3 4 5 unpacked value 


// // Spread Array means porana array
// let arr2 = [3,5,6,7,8,1];
// let newArr = [...arr2]
// console.log(newArr); //output (6) [3, 5, 6, 7, 8, 1]



// // Spread Array means porana array or sath may or item
// let arr3 = [3,5,6,7,8,1];
// let newArray = [...arr3,12,'salman']
// console.log(newArray); //output (8) [3, 5, 6, 7, 8, 1, 12, 'salman']


// // yaha array copy nahi howa yaha array ka refernce copy ho gaya memory address copy hogya 
// let arr4 = [1,2,3];
// let news = arr4;
// console.log(news); // output (3) [1, 2, 3]


// Example
// let arr5 = [1,2,3];
// let newss = arr5;
// newss.push(5);
// console.log(newss);//output (4) [1, 2, 3, 5] 
// console.log(arr5);//output (4) [1, 2, 3, 5]



// // Example
// let arr5 = [1,2,3];
// let newss = arr5;
// console.log(newss);//output (3) [1, 2, 3]
// newss.push(5);
// console.log(arr5);//output (4) [1, 2, 3, 5]


// Shallow copy
// let arr = [1,2,3];
// let copyArr = [...arr];
// copyArr.push(5);
// console.log(copyArr);//output (4) [1, 2, 3, 5]
// console.log(arr); // output (3) [1, 2, 3]



// Shallow copy
// let arr = [1,2,3];
// let copyArr = [...arr];
// arr.push(5);
// console.log(copyArr); // output (3) [1, 2, 3]
// console.log(arr); //output (4) [1, 2, 3, 5]

// Shallow copy may hum pehla level copy kar rahy hotay hai 
// or deep copy may nested level b copy kar rahy hoty hai 

// Merge two Array
// let arr1 = ['caption', 'iron', 'man', 'wanda'];
// let arr2 = ['dost', 'spider man'];
// let mergeArr = [...arr1, ...arr2];
// console.log(mergeArr);//output (6) ['caption', 'iron', 'man', 'wanda', 'dost', 'spider man']


// Spread String
// let str = 'M.Salman';
// console.log(...str);//output M . S a l m a n

// Spread convert String to Array
// let str1 = 'M.Salman Khan ';
// let arr = [...str1];
// console.log(arr);//output (14) ['M', '.', 'S', 'a', 'l', 'm', 'a', 'n', ' ', 'K', 'h', 'a', 'n', ' ']


// Spread in function call
// let users = ['salman', 'maozz', 'maaz'];

// function userThree(user1, user2, user3) {
//     console.log(user1);
//     console.log(user2);
//     console.log(user3);
// }
// userThree(...users);


// Spread Object
// let obj = {name:'salman',age:21,passion:'MERN Stack',city:'karachi'};

// let objCopy = {...obj};
// console.log(objCopy);//output {name: 'salman', age: 21, passion: 'MERN Stack', city: 'karachi'}

// another way
// let obj = {name:'salman',age:21,passion:'MERN Stack',city:'karachi'};

// let objCopy = {...obj};
// objCopy.name = 'salo bahi';
// console.log(objCopy);//output {name: 'salo bahi', age: 21, passion: 'MERN Stack', city: 'karachi'}
// console.log(obj);//output {name: 'salman', age: 21, passion: 'MERN Stack', city: 'karachi'}


// another way
// let obj = {
//     name:'salman',
//     age:21,
//     passion:'teaching'
// }
// let copyObj = {
//     ...obj,
//     age : 22,
//     passion:'MERN Stack',
//     lifePathner:'Moiz'
// }
// console.log(copyObj);//output {name: 'salman', age: 22, passion: 'MERN Stack', lifePathner: 'Moiz'}


// Merge two Object
// let obj1 = {
//     name:'salman',
//     age:21
// }
// let obj2 = {
//     name:'Maaz',
//     age:20
// }
// let MergeObj = {...obj1,...obj2}
// console.log(MergeObj);//output {name: 'Maaz', age: 20} yaha name age key same hai tu override kar raha hai


// Merge two Object

// let obj1 = {
//     name:'salman',
//     age:21
// }
// let obj2 = {
//     name1:'Maaz',
//     age1:20
// }
// let MergeObj = {...obj1,...obj2}
// console.log(MergeObj);//output {name: 'salman', age: 21, name1: 'Maaz', age1: 20} yaha name age key same nahi hai tu override nahi kar raha hai 

// tu Spread matlab pehlana unpack karna 
// or Rest matlab aik jaga collect karna pack kar dena 



// Rest

// function same(a,b,c){
//     return a+b+c;
// }
// let result = same(2,3,5);
// console.log(result);//output 10

// // real way rest in parameter
// function res(...a){
//     console.log(a);
// }
// res(2,3,4,6,7,89);//output (6) [2, 3, 4, 6, 7, 89] tu ye pack kar dta hai rest operator

// // another way rest in function parameter
// function res(...arr){
//     console.log(arr);
// }
// let result = res('salo',2,3,4,6,8.6);
// console.log(result)//output (6) ['salo', 2, 3, 4, 6, 8.6] tu ye pack kar dta hai rest operator


// function sum(...ar){
//     let sumResult = ar.reduce((acc,curr)=>{
//         return acc + curr;
//     })
//     return sumResult;
// }

// let output = sum(1,2,3,4,56,30);
// console.log(output);//output 96
// tu us may kitna b dy do ye pack kar k output ap ko dy dega sperad operator



// Destrucrturing
// Destruturing means torna matlab array hum nay banaya matlab structure kiya index or value may or object may b hum structure kar rahy hotay hai key - value pair may tu de structure matlab tor dena variables may aik aik part may aik aik key may 
// let arr = ['salman', 'Maaz', 'Moiz', 'Bruatti'];
// let [user1, user2] = arr;
// console.log(user1, user2);//output salman Maaz
// // tu arr hum nay avriable may pass kiya pehlay variable may pehli value or dosray variable may dosri or thirsra tu nahi hai tu do value bas print ho jahy gi

// // Destrucrturing in rest Operator
// // ab may chata ho pehla user alag ho jahy or baqi gitnay user hai wo alag ho jahy
// let user = ['salman', 'usman', 'ayan', 'noman'];
// let [user3, ...otherUser] = user;
// console.log(user3,otherUser);//output salman  (3) ['usman', 'ayan', 'noman'] tu yahi baqi may kitnay a rahy tay humay nahi pata hum bas pack kar rahy hai tu rest hai

// agar place k hisab say seperate karna chatay hai
// let user = ['salmo','bahi','salmaty','sal','man'];
// let [user1,user2,user3,...other] = user;
// console.log(user1)//output salmo
// console.log(user2)//output bahi
// console.log(user3)//output salmaty
// console.log(other);//output (2) ['sal', 'man']

// Rest with Desturcturing Array
// const [first,...rest] = [100,200,300,400];
// console.log(first);//output 100
// console.log(rest);//output (3) [200, 300, 400]



// Rest with Desturcting Object
// const person ={name:'salman',age:18,city:'Karachi'};
// const {name,age,...other} = person;
// console.log(name);//output salman
// console.log(age);//output 18
// console.log(other);//output {city: 'Karachi'} means baqi ko packed kar k object may dy do
// console.log(person);//output {name: 'salman', age: 18, city: 'Karachi'}


// tu object may key metter karta hai key ka name exist same ap ko dena hai or aghy ho ye pichy ho ye metter nahi karta 
// let obj = {name:'salman',age:21};
// let {age,name} = obj;
// console.log(name);
// console.log(age);

// so spread use expend values and use function call(argument),arrays,object and used = right side use  spread use or in arugument
// so rest use collect values and use function parameter , destructuring and use rest left side = use and or a parameter 