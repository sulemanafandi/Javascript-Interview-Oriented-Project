// Javascript is bydefault Synchornus in nature
// us ko Aysnchornus banaya ja sakta hai
// // All pakistan mothers are bydefault Asynchornous in nature
// matlab pakistan k mother aik sath both saray kam kar rahi hai washing machine may cloths b doh rahi hogi or sath may cooking b chal rahi hogi or sath may bachy ko b sola rahi hogi wo non blocking task karay gi kapray dol rahay hai dosray task ko block nahi karna hai wo b start karna hai sab task aik sath chal rahy hotay hai jo pehlay complete ho jahy tu multiple task ho rahy hai block nahi karna hai dosray task ko this is Aysnchronus Programming javascript
// Aysnchornus a nay walay task ko block nahi karna hai sab kam chal rahy hongy jo hota jahy wo honay do agy or karo
// Javascript single thraded hota hai aik hi time par aik task perform kar raha hota hai


// tu ye block may kam kar raha hoga nichy wala last may run hoga 
// console.log('Task 1')
// console.log('Task 2')
// for (let i = 1; i < 4; i++) {
//     console.log('task', i);
// }
// console.log('Task 3')
// console.log('Task 4')
// console.log('Task 5')


// tu non blocking task hai 
// console.log('first')
// setTimeout(() => {
//     console.log('roti task');
// }, 2000)
// console.log('Secound')


// yaha multi task aik sath run howay kisi ko kisi nay block nahi kiya
// setTimeout(() => {
//     console.log('chawal ban gaya')
// }, 3000)
// setTimeout(() => {
//     console.log('kana ban gaya')
// }, 4000)
// setTimeout(() => {
//     console.log('dahi ban gaya')
// }, 1000)


// Aysnchornus kehta hai may agar Aysnchornus code ho tu may ahgy walay task ko block nahi karon ga may ye wada karta ho k jab output ahy ga tab may ap ko ddy don ga ap agy wala kam continue kar do tu kuch na kuch promise kar raha hai k jab mera task complete ho jahy may dy don ga tab tak ap ahgy wala kam karlo

// like ap APIs call kar rahy ho ap data la nay walay ho laken ap ka data aya nahi hai or ap code may aghy bar gahy ap ko data mil hi nahi or ap ahgy ka kam kar gahy tu yaha par ap ko aysnc nature nahi chaheya ta API call ap ka aysnc hota hai but yaha par yaha ap ka data aya hi nahi hai ap ahgy ka code execute kar rahy ho tu yaha par ap data ka wait karerngy k data a jahy tab ahgy jana hai tu yaha ap Aysnc ko b basically Sync may la nay ki kosish karo gy data a jata hai tab ahgy ka kam karna hai or baqi ka code jo hai us ko ap block nahi karo gy  wo chal raha hoga but kafi bar need par jati hai jab tak ap ka data na ahy tab tak execute mat karna kuch code ko execute karo but kuch code ko execute na karo tu waha humay tora both restriction b lagana par sakta hai 
 
// fetch ka use koyi b API say data fetch (lana) k lie
// API say data Json format may a ta hai

// jo b api ap call kar rahy ho wo ap ka aysnchronous in nature hota hai matlab ahgy k code ko block nahi karay ga

// let result  = fetch('https://jsonplaceholder/users');
// console.log(result);

// console.log('first')
// console.log('first')

// ye kehta hai k may promise kar k ja raha ho ap ahgy ka kam continue karo data lanay may time lag sakta hai tu ye hota hai promise ap ahgy ka code block mat karna 

// Step #1

// function fetchData(){
//     let response = fetch('https:jsonplaceholder.typicode.com/users');
//     console.log(response);
// }
// fetchData();

// //Step 2
// async function fetchData(){
//     let response = await fetch('https:jsonplaceholder.typicode.com/users');
//     console.log(response);
// }
// fetchData();


//Step 3
// async function fetchData(){
//     let response = await fetch('https:jsonplaceholder.typicode.com/users');
//     console.log(await response.json());
// }
// fetchData();

// HTTP Method
// matlab ap ko server par kiya action perform karana hai thats callled HTTP Method
// bydefault HTTP method get karnay ka kam karta hai

// apko server say data lanay k kam karna karna hai tu server say get karo gy
// apko server par bejhnay k kam karna karna hai tu post karo gy server par
// apko server par jana hai or waha data Modify karnay k kam karna hai to update karo gy
// apko server par jana hai or waha sirf kuch data Modify karnay k kam karna hai to patch karo gy
// apko server par say data remove karna ka kam karna hai tu ap delete karo gy

