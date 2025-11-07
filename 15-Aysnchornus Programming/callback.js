// callback humaysha aik function hota hai
// callback is a function passed as an argument its another function
// callback wo function hota hai jis ko hum as a argument pass kar rahy hotay hai 
// HOD(higher order function) aisa function hota hai jo ki apnay andar yani ki callback ly raha hota hai
// tu jo function hum pass kar rahy hotay hai wo callback hai or jis k andar pass kar rahy hotay hai wo higher order function hai
// Example higerOrderFunction(callBack);

// Synchoronus way
// function HOD(name,callback){
//     callback(name);
// }
// function printName(name){
//     console.log('hello ',name)
// }
// HOD('salman',printName)
// yaha printName hum reference pass kar rahy hai 


// Synchoronus way
// function calculate(a,b,callback){
//     callback(a,b)
// }

// function sum(a,b){
//     console.log(a+b)
// }
// function subtruct(a,b){
//     console.log(a-b)
// }
// function multiply(a,b){
//     console.log(a*b)
// }

// calculate(2,3,sum)
// calculate(2,2,subtruct)
// calculate(2,4,multiply)


// Asynchoronus way

// console.log("1. Fetching Data...");

// function fetchData(){
//     setTimeout(()=>{
//         console.log("data fetch ho chuka hai.")
//     },3000);
// }
// fetchData();
// jab data a jahy ga tu humay jo process karna hai tu us process walay function ko hum bola lengy callback kar len gy thats us lie us ka name hai callback
// tu jab data a jahy ga tu kuch kam honay k bad humay kuch kam karna hai tu us ko hum wapas say bola lengy callback kar lengy or kam kar wa lengy tu proceesData callback hai k jab data a jahy ga tu process data ko call kar lengy kab call karna hai jab data a jahy ga


// function fetchData(processData){
//     setTimeout(()=>{
//         console.log('2.Data fetch ho chuka hai.')
//         processData();
//     },3000)
// }

// function processData(){
//     console.log('3.Processing with data...')
// }

// fetchData(processData);

// console.log("4.Some other task...")
// tu callback humaysha aik function hota hai kuch honay k bad call back kar lety hai us function ko


//example 4: aysnc

// function getData(data,calback){
//     setTimeout(()=>{
//         console.log(data)
//         if(calback){
//             calback();
//         }
//     },3000);
// }
// console.log(`fetaching first data....`)

// getData('1st data',()=>{
//     getData('2nd Data',()=>{
//         getData('3rd Data',()=>{

//         });
//     });
// });


//example 4: aysnc

// function getData(data,calback){
//     setTimeout(()=>{
//         console.log(data)
//         if(calback){
//             calback();
//         }
//     },3000);
// }
// console.log(`fetaching first data....`)

// getData('1st data',()=>{
//     console.log('fetching 2nd data...')
//     getData('2nd Data',()=>{
//         console.log('fetching 3rd data...')
//         getData('3rd Data',()=>{
//             console.log('fetching 4th data...')
//             getData('4th data')
//         });
//     });
// });


// another example
// console.log('getting data')
// setTimeout(()=>{
//     console.log('getting users from database');
//     setTimeout(()=>{
//     console.log('getting products from database');
//     setTimeout(()=>{
//         console.log('Final Data');
//     },3000);
//     },3000);
// },3000);


// Real World Scenario of Callback
// Note:- Never try to understand 🙂, if you want to live long

// function getUsers(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             callback(null, users);
//         } else {
//             callback(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         callback('Network error');
//     };

//     xhr.send();
// }


// function showData(err, data) {
//     if (err) {
//         console.log("Failed:", err);
//     } else {
//         console.log("Success:", data);
//     }
// }

// // Using the function
// getUsers(showData);


// tu us solves karny k lie aya promises or promise ki syntax ko acha karnay k bad aysnc await aya

// Promises
// Promise is a special object in a Javascript that represents a task that will finish in the future
// basically constructor function hai jis say hum promise bana rahay hotay hai
