// data store karnay k lie ap database may data store karty ho ap database crate karty wo server create karty ho and waha say ap aram say fetch wagira b karty hoapi wagira or asysnchorus etc but us may tora sa time lagta hai tu time consuming kitna b time lag sakta hai tu aik jo easy sa tariqa ye hai k kuch jo important data hai user specific data hogaya jo ap ko bar bar need par rahi hai tu wo sari cheezay ya tu local storage may ya session storage may save kar saktay ho dono ka apna apna faida hai us ka retrival kafi zyada fast hota hai synchohons way retrive hota hai both fastly line by line code chal raha hota haiap nay upper line may set kiya nichy line may ap get kar sakty ho bas filhal k lie ap local save kar sakty jaisay computer may local memory hai  jaisy movie ap k local memory may hai tu ap apin pc may dekh sakty ho butagar ap server par hai tu ap online b dekh sakty ho tu 5 mb ka ap ka data hota hai jo lacal data hai us ko ap local ayani say local stroage or session storage may save kar sakty ho tu jo important datas hai user specific hai tu wo ap local ya session storage may save kar sakty ho

// both local storage and sessionStorage are part of hte web Stroage API used to store key-value pair in hte brower
// store data in hte Brower(No Server Needed)
// Improve User Expreience (keep user settings and user specfic data)
// Fast & Easy Access
// Easy to Use API
// Foundation for Advance Topics(Index,Cookie,PWA)

// tu localStorage and SessionStorage brower Specific feature hai jaisay DOM console setTimeout ,setInterval tu localStorage and SessionStorage ko key-value pair Store kar kary hai

// let a = localStorage.setItem('name','M.Suleman');
// console.log(a);

// let b = localStorage.getItem('name');
// console.log(b);

// let c = localStorage.removeItem('name');
// console.log(c);


// let e = localStorage.setItem('name','M.Suleman','age','21','class','MERN Stack');
// console.log(e);
// let k = localStorage.setItem('name', 'Salman');
// console.log(k);
// let g = localStorage.setItem('age', '21');
// console.log(g);
// let h = localStorage.setItem('class', 'MERN Stack');
// console.log(h);

// agr multiple item ko remove karna hai
// let d = localStorage.clear();
// console.log(d);

// yaha index do gy ap ko key return karay ga
// let j = localStorage.key(1);
// console.log(j);


// yaha index do gy ap ko key return karay ga
// let z = localStorage.length;
// console.log(z);

// yaha boolean value 
// let x = localStorage.setItem('isLoggedIn',false);
// console.log(x);
// let islogin = localStorage.getItem('isLoggedIn');
// console.log(islogin); //output 'false' so string format answer
// tu us ko slove karnay ka tariqa ye hai k jo value hai us ko pehlay stringify kara do bad may parseInt kardo

// let isLoggedIn = false;
// let strFormat = sessionStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn));
// let result = JSON.parse(localStorage.getItem('isLoggedIn'));
// console.log(result) // output false boolean

// usi tara agar array ko save kar nah hai
// let a = [2,3,5,6,5];
// let b = localStorage.setItem('array',JSON.stringify(a));
// let c = JSON.parse(localStorage.getItem('array',b));
// console.log(c); // output(5) [2, 3, 5, 6, 5] tu ye array format may save ho gaya pehlay string format may ta


// usi tara agar Object ko save kar nah hai
// let a = {name:'salman',age:17,class:'MERN Stack'};
// let b = localStorage.setItem('array',JSON.stringify(a));
// let c = JSON.parse(localStorage.getItem('array',b));
// console.log(c); // output{name: 'salman', age: 17, class: 'MERN Stack'} tu ye object format may save ho gaya pehlay string format may ta

// tu koyi b object ho array ho boolean ho ap normally us tariqy say Json.stringify kar k ap local Storage may save kar saktay ho q k local Storage humaysha string format may value save karta hai ap chate ho format maintain rahy tu set karnay k doran jon.stringify karlo or jab get karo gy tu ap json.pasre karlo thats why ap ko orignal format mil jahy gi



// ab ya samajna k kaha local Stroge use karna hai kaha session Storage

// tu localStorage jab ap broswer band b karay pir b saved rehta hai value ap ka local Storage tu jab tak ap pc clear na kardo ya brower say apna catch wagira clear na kardo tab tak save rehta hai
// tu pehli bath jis brower may hum kam karen gy us brower may local Stroage save karo gy or dosri bath jis broswer may ap ki profile bani ho wahi profile hai tu usi may kam karay ga tu brower or profile depended hai ye

// tu SessionStorage wahi command jo localStroage k lie use karty ho wahi use karnay hai localStroage ki jaga sessionStorage likhna hoga dosri bath sessionStorage siraf session tak kam karta hai agar ap dosray session matlab tab may use karo gy waha nahi ahy ga nahi rahy ga jo open kar rakha hai waha hoga acha agar ap broswer reload karo gy ya change karo gy tu pora ka pora data remove ho jahy ga ye usi session (tab)par siraf kam karta hai

// dono k lie 
// Security
// Not secure for sensitive data (passwords,tokens)__acessible via Javascript
// Vulnerable to Cross-Site Scripting (XXS) if not properly senitized. matalb xxs injection lagta hai data not secure hota hai
// but faster hota hai definatly ap ko wo cheezay store karani hai jo ap bar bar retrive karo gy laken both zyada sensitive data yaha store nahi karna yaha par
// localStorage or sessionStorage Origin-based Storage hota hai q hum usy boltay kiya matlab us ka
// tu You cannot access localStorage or sessionStorage data across origins
// jaisay ap server create kar rahy ho tu server ap differnet origin may access nahi kar saktay tu aisa nahi hai k koyi b access kar pa raha hai waha origin mention hota hai k hum siraf https://google.com hi access kar pahy ga misal lo  tu us ko hum boltay hai origin k konsa origin access kar pahy ga tu kiya agar hum data us origin may save kar pah rahy hai tu dosra origin access kar pahy ga tu jis origin par ap nay data store kiya hai usi origin par hi data access hota hai dosray par nahi dono localStorage or sessionStorage dono par hi apicable hai ye 

// SessionStorage

// let a = sessionStorage.setItem('name','M.Suleman');
// console.log(a);

// let b = sessionStorage.getItem('name');
// console.log(b);

// let c = sessionStorage.removeItem('name');
// console.log(c);


// let e = sessionStorage.setItem('name','M.Suleman','age','21','class','MERN Stack');
// console.log(e);
// let k = sessionStorage.setItem('name', 'Salman');
// console.log(k);
// let g = sessionStorage.setItem('age', '21');
// console.log(g);
// let h = sessionStorage.setItem('class', 'MERN Stack');
// console.log(h);

// // agr multiple item ko remove karna hai
// let d = sessionStorage.clear();
// console.log(d);

// // yaha index do gy ap ko key return karay ga
// let j = sessionStorage.key(1);
// console.log(j);


// // yaha index do gy ap ko key return karay ga
// let z = sessionStorage.length;
// console.log(z);