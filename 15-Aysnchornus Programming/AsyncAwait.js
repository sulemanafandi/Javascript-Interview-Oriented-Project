// most of the cases may hum Aysnc await use karty hai

// Acha Aysnc await may syntax both zyada better hota hai Inhance hota hai 
// Aysnc await ap k zindagi ko both asan bana deti hai ye b promises par hi based hai  fetch yaha apr b use kar rahy hongy axios ahgy ap paro gy 
// Aysnc Await
// helps you write aysnchornus code in a cleaner,more readable way -- almost like it's synchournas
// aysnc: Make a function always return a Promise 
// await: Pauses inside an 'aysnc  function until the Promise is resolved

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'M<.Suleman',
//                 class: "MERN Stack"
//             })
//         }, 3000);
//     })
// }
// let result = getData();
// console.log(result);

// but us ko hum kasay utilize karengy kasay data ly rahy hongy kasay kam kar rahy hon gy wo syntax ab hum change karen gy syntax ab hum aysnc await wala use karen gy definatly kam internally promise kar raha hoga but syntax hum aysnc await wala use karen gy dot then dot catch nahi use karen gy



// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'M<.Suleman',
//                 class: "MERN Stack"
//             })
//         }, 3000);
//     })
// }
// async function fetchData() {
//     let result = await getData();
//     console.log(result);
// }
// fetchData();

// ab pehlay jo kam kar rahy tay aik data anay k bad dosra or dosra data anay k bad thisra or thisra data anay k bad chota tu wo ab kam humyaha say kar saktay hai q k jaha par b hum await use kar rahy hon gy ahgy walay insrtuction ko wo hold pa dal deta hai jab tak jab tak await ka kam fulfill nahi ho jahy ga tab tak ye ahgy nahi baray ga


// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'M<.Suleman',
//                 class: "MERN Stack"
//             })
//         }, 3000);
//     })
// }
// async function fetchData() {
//     let result = await getData();
//     console.log(result)

//     console.log("Hello");
//     console.log("alsdflkjdsf");

// }
// fetchData();
// tu async function apnay andar pora data ko hold kar k rekhta hai jab tak pora ka pora fullfilled na ho jata ya reject nahi ho jata tu ahgy ka kam ko block na kar wa raha hai
// tu ya behaivor wahi same problem ko solve karnay k lie jo callback may b dekh rahy tay k aik cheez a nay k bad agar dosra kam karna hai or promise may b dekh rahy tay k dot then agar ye data a jata hai tu then dot then then dot then tu kitna zyada lamba chain ban jata yaha par ab aisa bilkul nahi hota 


// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'M<.Suleman',
//                 class: "MERN Stack",
//                 data,
//             })
//         }, 3000);
//     })
// }
// async function fetchData() {
//     let result = await getData(2);
//     console.log(result)
// }
// fetchData();

// ab agr aik data a nay k bad dosra kam karna hai tu again same tariqe say ap kar saktay ho


// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'M<.Suleman',
//                 class: "MERN Stack",
//                 data,
//             })
//         }, 2000);
//     })
// }
// async function fetchData() {
//     let data1 = await getData(1);
//     console.log(data1)
//     let data2 = await getData(2);
//     console.log(data2)
//     let data3 = await getData(3);
//     console.log(data3)
//     let data4 = await getData(4);
//     console.log(data4)
//     let data5 = await getData(5);
//     console.log(data5)
// }
// fetchData();
// tu gitna b lamba chain ly k ja saktay ho ly jaho ye real world may hi use hota hai kafi aisani say kam ho raha hoga dekh k samaj a raha haibilkul sunchornus jaisa lag raha hai but hai Asynchornus 
// both zyada clean syntax hai ye

// aik or both acha real case
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'M<.Suleman',
                class: "MERN Stack",
                data,
            })
        }, 2000);
    })
}
async function fetchData() {
    let data1 = await getData(1);
    console.log(data1)
    let data2 = await getData(2);
    console.log(data2)
    let data3 = await getData(3);
    console.log(data3)
    let data4 = await getData(4);
    console.log(data4)
    let data5 = await getData(5);
    console.log(data5)
}
fetchData();
async function fetchData(){
    let data =  await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);
}



// aysnc : Make a function a;lways return a promise 
// await : Pauses inside an 'async'  function until the Promise is resloved

// so Code outside the aysnc function contiues immediatly
// Code inside the aysnc function pauses at await

// so us k bad final touchup karty hai
