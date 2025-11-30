// Callback
// function greet(callback){
//     console.log('this is greet')
//     callback()
// }
// greet(bye)
// function bye(){
//     console.log('this is bye')
// }
// aik aisa function jo kisi dosray function k argument mein pass kiya jata hai or us k parameter k through usay call kiya jata hai usay callback function kehty hai us say humara non block code of execution hota hai ye hota hai multi threaded


// setTimeout(()=>{
//     console.log('1 sec')
// },1000)


//  Promises
// ye b callback receive karta hai laken hota javascript ka ojbect hi hai

// let promise = new Promise((reslove, reject) => {
//     let age = 19;
//     if (age >= 18) {
//         reslove('Success');
//     } else {
//         reject('Error 400')
//     }
// })
// console.log(promise)

// promise.then((resolve) => {
//     console.log(resolve)
// }).catch((reject) => {
//     console.log(reject)
// })


// async await

// async function Greet(){
//     return 'hello'
// }
// Greet().then(res => console.log(res))


// async function Greet() {
//     console.log('1.Start');

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('2.Promise')
//         },3000)
//         resolve()
//     });

//     console.log('3.End')
// }
// Greet()
// console.log('4.outside')


// fetch

// let fetchDataPromise = fetch('https://dummyjson.com/products',{method:''});
// fetchDataPromise
// .then(res => res.json())
// .then((data) => {console.log(data)})


// aysnc await ap k promise handling ko easier banata hai
// async function fetchAPI(){
//    let response = await fetch('https://dummyjson.com/products',{method:'get'});
//    let data = await response.json();
//    console.log(data);
// }
// fetchAPI()



// async function fetchAPI(){
//     try{
//         let response = await fetch('https://dummyjson.com/products',{method:'get'});
//        let data = await response.json();
//        console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchAPI()

// aysnc await matlab aik aisa function jo k ap ko promise return karta hai
