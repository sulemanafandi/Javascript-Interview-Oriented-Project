// Promises
// Promise is a special object in a Javascript that represents a task that will finish in the future
// basically constructor function hai jis say hum promise bana rahay hotay hai

// let p1 = new Promise()
// console.log(p1); 


// let p1 = new Promise((resolve,reject)=>{
//     console.log('Promise hai ye')
// })
// console.log(p1); 


// let p1 = new Promise((resolve,reject)=>{
//     resolve('data fetch successfull')
// })
// console.log(p1); 

// let p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name:'Salman',
//         age:16
//     })
// })
// console.log(p1); 

// let p1 = new Promise((resolve,reject)=>{
//     reject('may tik nahi ho')
// })
// console.log(p1); 

// resolve and reject are callbacks (matlab function ) provided  by Javascript

// Promise has 3 State
// Pending -- still waiting
// Resolve(fullfiled)-- task completed
// Rejected--something went wrong

// tu promise aik constructor function hai or ye callback ly raha hota hai or us k anadar bydefault 2 callback mil rahay hotay hai jis ko hum kud say name detay hai resolve and reject hum resolve b kar saktay hai or reject b kar saktay hai data humay mil jahy ga tu hum nay Promise create karna sikh liya  but humay aisay Promise create nahi karna hai  wo tu backend enginer humay kud API wagira bana k dy raha hoga ya database bana howa hoga humay fetch kar k kam karna hoga tu waha automatically Promise humay mil raha hoga return may 
// tu promise say jo data return hoga us ko hum deal kasay karen gy wo sikhna hai

// let p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name:'salman'
//     })
//     reject('Some thing went Wrong..!!')
// })
// // p1.then((response)=>{
// //     console.log(response)
// // })
// // p1.catch((reject)=>{
// //     console.log(reject)
// // })
// //or
// p1.then((data)=>{console.log(data)}).
// catch((err)=>{console.log(err)});


// Practicle Example

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             name:'salman',
//             age:17
//         })
//     },3000);
// })
// console.log(p1)
// p1.then((res)=>{console.log(res)}).catch((err)=>{console.error(err)})


// another Example

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'salman',
//                 age: 17
//             });
//             reject('Wrong...')
//         }, 2000);
//     });
// }

// let result = fetchData();
// result.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.error('Some thing went Worng',err)
// });



// // Promise Chain

// function fetchData() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove({
//                 name: 'salo',
//                 age: 17
//             });
//         }, 3000)
//     })
// }

// function fetchData2() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove({
//                 laptop: 'Dell Latitude 7410 i-5 10 Gen'
//             });
//         }, 5000)
//     })
// }

// console.log('fetching Data...')

// let result = fetchData();

// result.then((data) => {
//     console.log(data);
//     let resonse2 = fetchData2()
//     resonse2.then((res2) => {
//         console.log(res2)
//     })
// })



// another way more readable
// Promise Chain

// function fetchData() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove({
//                 name: 'salo',
//                 age: 17
//             });
//         }, 3000)
//     })
// }

// function fetchData2() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove({
//                 laptop: 'Dell Latitude 7410 i-5 10 Gen'
//             });
//         }, 5000)
//     })
// }

// function fetchData3() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove({
//                 laptop: 'Your are Professional Developer'
//             });
//         }, 6000)
//     })
// }

// console.log("fetching data...")
// fetchData()
//     .then((data) => {
//         console.log("data aa chuka h", data);
//         return fetchData2()
//     })
//     .then((data) => {
//         console.log("data2 bhi aa chuka h", data)
//         return fetchData3()
//     })
//     .then((data) => {
//         console.log("final data3 bhi aa chuka h", data)
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// real work

// let response = fetch('https://jsonplaceholder.typicode.com/users');
// response.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err)
// })

// chaining
// let response = fetch('https://jsonplaceholder.typicode.com/users');
// response
//     .then((data) => {
//         console.log(data);
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//     });
// ye b zyada use nahi karte but most of the cases may hum Aysnc await use karty hai

// Acha Aysnc await may syntax both zyada better hota hai Inhance hota hai 
// Aysnc await ap k zindagi ko both asan bana deti hai ye b promises par hi based hai  fetch yaha apr b use kar rahy hongy axios ahgy ap paro gy 
// Aysnc Await
// helps you write aysnchornus code in a cleaner,more readable way -- almost like it's synchournas
// aysnc: Make a function always return a Promise 
// await: Pauses inside an 'aysnc  function until the Promise is resolved


