// Question#1
//1. Create a function that returns the last element of an array.

// function getLastElem(localArr){
//     return localArr[localArr.length - 1];
// }

// let arr = [2,3,5,6,7,8,5];

// let lastElem = getLastElem(arr);
// console.log(lastElem);
// ye method orignial array may b koyi change nahi kar raha hoga


// Question #2
// 2. Find the combination of two arrays

// let arr1 = [2,3,4,5,6];
// let arr2 = [7,8,9,10];

// let CombinationArrr = arr1.concat(arr2);
// console.log(CombinationArrr); // no change original Array

// let combineArr = [...arr1,...arr2]; // array ko tor k combine karna 
// console.log(combineArr);// no change original Array maximum case use this

// console.log(arr1,arr2); // proved no change orignial array


// Question #3
// 3. Generate a random integer between 0 to 18
// let RanndumNum = Math.floor(Math.random()*19);
// console.log(num);


// 4. Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

// let arr = [2,34,5,'s','m','salman',4,5,54];

// let NewArr = arr.filter((elem)=>{
//     if(typeof elem === 'string') {
//      return true;
//     }else{
//       return false;
//     }
//     // another way
//     return typeof elem === 'string';
// });
// console.log(NewArr);


// Question#5
// 5. Find the maximum number in an array

// let arr = [3,5,7,9,12,68,41];
// console.log(Math.max(...arr));


// Question #6
// 6. Write a function that returns the length of a given object (number of keys).

// let obj = {
//     name:'Salman',
//     lname:'Khan',
//     age:17
// } 
// console.log(Object.keys(obj).length);

// another way 
// let obj = {
//     name:'Salman',
//     lname:'Khan',
//     age:17,
//     class:'IT',
//     Filed:'MERN Stack',
//     city:'Karachi'
// } 
// let getObjLength = (Ob)=>{
//     return Object.keys(Ob).length;
// }

// let length = getObjLength(obj);
// console.log(length);


// Question # 7
// 7. In an array of objects filter out those objects which have gender's value male.

// let arr = [
//     {name:'salman',gender:'Male'},
//     {name:'Chandega',gender:'Female'},
//     {name:'Usman',gender:'Male'}
// ]   
// let resultArr = arr.filter(obj=>{
//     return obj.gender === 'Male'
// })
// console.log(resultArr);


// Question # 8
// 8. Given an array of strings, return a new array where all strings are in uppercase.

// let arr = ['alu', 'gobi', 'halwa', 'chai'];

// let resultArr = arr.map(elem => {
//     return (elem.toUpperCase());
// })
// console.log(resultArr);


// Question # 9
// Check if an Object is empty (has no keys)

// let Obj = {name:'salman'};

// let isEmptyObj = Object.keys(Obj).length < 1;

// if(isEmptyObj){
//     console.log("Object is Empty");
// }else{
//     console.log("Object is not Empty");
// }

// Question # 10
//10. Create an array of numbers and double each value using .map().
// let arr = [2, 4, 5, 6, 8, 3, 1, 10];
// let resultArr = arr.map(elem => {
//     return elem * 2;
// })
// console.log(resultArr);


// Questiom # 11
// 11. Convert an array of strings into a single comma-separated string.
// let arr = [1,'salman','3',5,7];
// let string = arr.join(',');
// console.log(string);
// console.log(typeof string);

// Question # 12
// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr = [1,2,3,4,['a','b','c'],5,6];

// long way
// console.log(arr[4]);
// arr.splice(4,1,...arr[4]);
// console.log(arr);

// another way
// console.log(arr.flat())

// another way
// let arr = [1,2,3,4,['a',['salman','khan'],'b','c'],5,6];
// console.log(arr.flat(3))


// Question  # 13
// 13. Write a function that checks if all elements in an array are numbers or not.

// let arr = [1, 2, 3,'s', 5];

// function CheckNumArray(localArr) {
//     let isNumbers = true;
//     localArr.forEach(element => {
//         if (typeof element !== 'number') {
//             isNumbers = false;
//         }
//     });
//         return isNumbers;
// }
// let result = CheckNumArray(arr);
// console.log(result);

// another ways
// let arr = [1, 2, 3, 3, 5];

// function CheckNumArray(localArr) {
//     let isNumbers = localArr.every(elem => typeof elem === 'number')
//     console.log(isNumbers);
// }
// let result = CheckNumArray(arr);
// console.log(result);


// Question # 14
// 14. Build a simple isPrime() function to check if a number is prime.

// function PrimeNum(num){
//     if(num === 0 || num === 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0 ) return false;
//     }
//     return true;
// }
// console.log(PrimeNum(2))


// Question 15;
// 15. Create a function that removes duplicate values from an array.

// let array = [1, 2, 3, 2, 4, 4, 5, 6, 6];

// function removeDuplicate(arr) {
//     let set = new Set(arr);
//     return [...set]
// }
// let resultArr = removeDuplicate(array);
// console.log(resultArr);


// Question 16:
// 16. What’s the difference between parseInt and Number()?

// console.log(parseInt("123.323"))
// console.log(Number("123.323"))

// console.log(typeof parseInt("123.323"))
// console.log(typeof Number("123.323"))

// console.log(parseInt("123.234px"))
// console.log(parseFloat("123.234px"))
// console.log(Number("123.234px"))

// console.log(parseInt("1sadk"))
// console.log(parseInt("setrwery123"))

// console.log(parseInt("10", 2)) // other parameter 2 is binaray convert 10 Okay Sure
// console.log(parseInt("100", 2))
// console.log(parseInt("110", 2))
// console.log(parseInt("111", 2))
// console.log(parseInt("10000", 2))
// console.log(parseInt("10000", 2))

// console.log(parseInt("110", 16))
// console.log(parseInt("100", 6))


// Question 17
// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

// console.log(0.1 + 0.2 !== 0.3) // binaray may proper conversion nahi ho pata 
// console.log(0.1 + 0.2) // 0.30000000000000004 tu flaoting point precision ka issue jata hai

// Question 18
//18. Explain floating-point precision issues in JavaScript.
// console.log(0.1 + 0.2 !== 0.3)
// console.log(0.1 + 0.2 )
// Answer jab b hum point something ka binaray may conversion kar rahay hotay hai
// basically jab b hum us tara ki cheezo ka calculation kar rahay hotay hai tu javascript may both zyada precise value calculate nahi kar pa raha hota hai yahi reasion hai k humara yaha par sahi calculation nahi ho pata ture value ko false consider kar leta hai flaoting point ka issue a jata hai



// Question 19
//19. How would you handle high-precision decimal math in JS?
// let sum = Number((0.1 + 0.2).toFixed(4));

// console.log(sum === 0.3);

// Question 20
// 20. What is the difference between slice and splice?
/*
!st difference -slice apply string and  array okay and splice only array apply
2nd difference - slice no change original array and string and splice change original array
*/
// let string = "salman";
// console.log(string.slice(1))
// console.log(string.slice(1,2))
// console.log(string.slice(1,3))
// console.log(string.slice(-3))
// console.log(string.slice(-4,-3))

// let arr = ['m','a','m','s','d','e'];
// console.log(arr.slice(2))
// console.log(arr.slice(2,4))

// slice say ap cut kar pah rahay tay string and array ko or jo cut kiya wo return kar raha hai
// splice say ap cut add delete or update sab kar saktay ho or slice wala kam b kar saktay ho acha splice method array par applay hota hai
// splice teen parameter ly raha hota hai stating index dosra kitna delete karna hai count delete or delete awla value return kar raha hota hai tisra parameter may update kar saktay hai
// splice may start may negative index dy saktay hai or update may b dy saktay hai laken delete count may negative index nahi dy saktay
//  both zyada use karty hai

// let arr = ['m','n','salman','sa','s','w'];
// let test = arr.splice(1,2,'salo','bahi')
// console.log(test)
// console.log(arr)



// Question # 21
// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun
// salman → namlas nuh iam

// let sentance = "Mai hui salman khan";
// let finalResult = sentance.split(' ').map(word => {
//     let reverseWord = word.split('').reverse().join('');
//     return reverseWord
// }).join(' ')

// console.log(finalResult)


// Question 22:
// 22. In an array of numbers and strings, only add those numbers which are not strings.

// let arr = ['1',"5",3,'salman',7,1];
// let sum = 0;

// arr.forEach(item=>{
//     if(typeof item === 'number'){
//         sum += item;
//         console.log(sum)
//     }
// })
// console.log("Total ",sum)


// Question 23:
// 23. How would you check if a number is an integer or not ?

// let num = 123.32;
// console.log(Number.isInteger(num));
// // another way
// let num1 = 123;
// console.log(num1 % 1 === 0)


// Question 24:
// 24. Write a JavaScript function that reverse a number.

// function reverseNumber(num) {
//     return Number(num.toString().split('').reverse().join(''));
// }
// let reverse = reverseNumber(123456789)
// console.log(reverse) // output 987654321

// Question 25:
// 25. Write a javascript function that returns a passed string with letters in alphabetical order.
// sort jo hai lexico graphical order matlab(Dictionaray pehlay a walay pir b walay pir c) string array alphabetial order par kam tu karay ga laken number may dokha kah jata hai

// let string = "Salman Khan Mehsud";

// function SortInAlphaOder(string){
//     return string.split('').sort().join('').trim();
// }

// let result = SortInAlphaOder(string);
// console.log(result);

// another way

// let string = "Salman Khan Mehsud";

// function SortInAlphaOder(str){
//     return str.split(' ').sort().join(' ');
// }

// let result = SortInAlphaOder(string);
// console.log(result);


// Question 26:
// 26. Write a Javascript function that accepts a string as a parameter and conversts the first letter of each word of the string in uppercase.

// let sentence = "hey i am salman khan";

// const capitalize = (sent)=>{
//     let resultArr =  sent.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//      return resultArr.join(' ');
// }
// let result = capitalize(sentence);
// console.log(result);

// Question 27:
// 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
// return the first 'n' elements of the array

// first Part
// let array = [2,3,6,7];
// function getArrayElem(arr){
//     return arr[0]
// }
// console.log(getArrayElem(array));

// complete part

// function getArrayElem(arr, n) {
//     if (!n) {
//         return arr[0]
//     } else if (n > arr.length) {
//         console.log("how many more element are not present in array");
//     } else {
//           return arr.slice(0, n)
//     }
// }
// getArrayElem([2, 3, 6, 7,6], 3);


// Question 28;
//28. Write a javascript function to get the number of occurrences (means kitni bar repeat ho raha hai) of each letter in specified string.

// let str = 'salman';

// function getOccurence(string){

//     let obj = {};

//     string.split('').forEach(letter =>{
//         if(obj.hasOwnProperty(letter)){
//             obj[letter] ++
//         }else{
//             obj[letter] = 1;
//         }
//     })

//     for(let key in obj){
//         console.log(`${key} apka ${obj[key]} bay aya hai`);
//     }
// }
// getOccurence(str)


// Question 29:
// 29. write a javascript program to find the most frequent item of an array.


// let array = [1,2,3,4,2,3,5,2,3,2];

// function getOccurence(arr){

//     let freqObj = {};

//     arr.forEach(letter =>{
//         if(freqObj.hasOwnProperty(letter)){
//             freqObj[letter] ++
//         }else{
//             freqObj[letter] = 1;
//         }
//     });
//     let maxFreq = Math.max(...Object.values(freqObj))

//     let keyValueArr = Object.entries(freqObj)
//     let fiteredArray = keyValueArr.filter(entryArr => {
//         return entryArr[1] === maxFreq
//     })
//     console.log(fiteredArray)
// }
// getOccurence(array);


// Question 30
// 30. write a javascript program to shuffle(randomly arrange karna) an array.

// let arr = [1, 2, 3, 4, 5, 6];

// for (let ind in arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length)
//     let temp = arr[ind];
//     arr[ind] = arr[randomIndex];
//     arr[randomIndex] = temp;
// }
// console.log(arr)


// another way
// One linear tariqa

// let arr = [1, 2, 3, 4, 5, 6];

// for (let ind in arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     [arr[randomIndex], arr[ind]] = [arr[ind], arr[randomIndex]]
// }
// console.log(arr)



// Question 31
// 31. How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

// let nameInput =  document.querySelector('#name')
// let EmailInput =  document.querySelector('#Email')
// let nameValue  = document.querySelector('.nameValue')
// let emailValue  = document.querySelector('.EmailValue')

// nameInput.addEventListener('input',(detail)=>{
//     nameValue.innerText = detail.target.value;
// });

// EmailInput.addEventListener('input',(detail)=>{
//     emailValue.innerText = detail.target.value;
// });


// Question 32
// 32. How would you handle form validation in real time and show error messages dynamically?


// let nameInput =  document.querySelector('#name')
// let EmailInput =  document.querySelector('#Email')
// let PasswordInput =  document.querySelector('#Password')
// let nameError  = document.querySelector('.nameError')
// let emailError  = document.querySelector('.emailError')
// let passwordError  = document.querySelector('.passwordError')

// nameInput.addEventListener('input',(detail)=>{
//     let name = detail.target.value;
//     if(name.length < 4){
//         nameError.innerText = 'Name must be at least 4 character'
//     }else{
//         nameError.innerText = '';
//     }
// });

// EmailInput.addEventListener('input',(detail)=>{
//     let Email = detail.target.value;
//     if(!Email.includes('@') || !Email.includes('.')){
//         emailError.innerText = 'Email must be at least @ and . character'
//     }else{
//         emailError.innerText = '';
//     }
// });

// PasswordInput.addEventListener('input',(detail)=>{
//     let Password = detail.target.value;
//     if(Password.length < 6){
//         passwordError.innerText = 'Password must be at least 6 character'
//     }else{
//         passwordError.innerText = '';
//     }
// });


// Question 33:
// 33. How do you find the closest ancestor(papa dada pardada ) element that matches a selector?

// let child = document.querySelector('#child');
// child.addEventListener('click',(e)=>{
//     console.log(e.target.closest('.parent'))
// })


// Question 34
// 34. How would you toggle a class on an element when another element is clicked (e.g.,
// show/hide sidebar)?

// let sidebar = document.querySelector('.sidebar');
// let Button = document.querySelector('Button');

// Button.addEventListener('click',()=>{
//     sidebar.classList.toggle('showSidebar')
// })

// Question 35
// 35. Create Show Hide Password Toggle
// let button = document.querySelector('button');
// let passwordInput = document.querySelector('#password')

// button.addEventListener('click',()=>{
//     let passwodType =  passwordInput.type;
//     passwordInput.type  = passwodType === 'password' ? 'text' : 'password'
//     button.innerText = passwodType === 'password' ? 'Hide' : 'show'
// })


// Question 36:
// 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling down. (Key concepts: scroll event, window.scrollY, classList.add/remove)

// let Navbar = document.querySelector('nav')

// window.addEventListener('scroll',(e)=>{
//     if(window.scrollY >100){
//         Navbar.classList.add('stick')
//     }else{
//         Navbar.classList.remove('stick')
//     }
// })

// kuch Question ahan gy

// Question 44
// 44. Guess the Output:
// let date = new Date(0);
// console.log(date.toString()) //'Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time)'
// let dateLocal = new Date(0);
// console.log(dateLocal.toLocaleString()) //'1/1/1970, 5:00:00 AM'

// let date1 = new Date();
// console.log(date1.toLocaleString()) //'9/30/2025, 9:43:07 PM'

// let date2 = new Date();
// console.log(date2.getTime()) //1759250701706

// Question 45
// 45. Validate that a user's selected date range is no longer than 30 days.

// let date = new Date('2025-09-30') //YYYY-MM-DDTHH-mm-ss-sssZ
// console.log(date)//new Date('2025-09-30T00:00:00.000Z')

// let date1 = new Date()
// console.log(date1);// new Date('2025-09-30T16:50:04.000Z')


// let nowDate = new Date('2025-09-30')
// let userDate = new Date('2025-11-30');
// let diff = userDate - nowDate;
// let numOfDays = Math.floor(diff / 1000 / 60 / 60 / 24)

// if (numOfDays > 61) {
//     console.log('date khatam howa please soon submitted')
// } else {
//     console.log('Congragulation Time baqi hai')
// }

// Question 46
// 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.

// let startingDate = '2025-05-26T07:20:00Z';
// let endingDate = '2025-11-30T07:00:00Z';

// function takeDifference(start, Ending) {
//     let StartDate = new Date(start);
//     let EndDate = new Date(Ending);

//     let diff = (EndDate - StartDate) / 1000;

//     let year = Math.floor(diff / (60 * 60 * 24 * 365));
//     diff = diff % (60 * 60 * 24 * 365)

//     let months = Math.floor(diff / (60 * 60 * 24 * 30));
//     diff = diff % (60 * 60 * 24 * 30)

//     let days = Math.floor(diff / (60 * 60 * 24));
//     diff = diff % (60 * 60 * 24)

//     let Hours = Math.floor(diff / (60 * 60 * 24));
//     diff = diff % (60 * 60)

//     let Minutes = Math.floor(diff / (60));
//     let second = Math.floor(diff % (60));

//     return `${year} Years ${months} Months ${days} Days ${Hours} Hours ${Minutes} Minutes ${second} Seconds`
// }

// let difference = takeDifference(startingDate, endingDate);
// console.log(difference) //output '0 Years 6 Months 7 Days 0 Hours 0 Minutes 0 Seconds'


// library use its easy
// another ways use library

// let {DateTime} = require('luxon');

// function takeDifference(start,end){
//     let startDate = DateTime.fromISO(start);
//     let endDate = DateTime.fromISO(end);

//     let diff = endDate.diff(startDate, ['years','months','days','hours','minutes','seconds','milliseconds'])

//     return `${diff.years} Years ${diff.months} Months ${diff.days} Days ${diff.hours} Hours ${diff.minutes} Minutes ${diff.seconds} Seconds ${diff.milliseconds} MilliSeconds`;
// }

// let startingDate = '2025-05-26T07:20:00Z';
// let endingDate = '2025-11-30T07:00:00Z';
// let difference = takeDifference(startingDate,endingDate);
// console.log(difference);


// Question 47
// 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)


// let n = 5;
// let startingDate = new Date('2025-05-26T07:20:00Z');

// let newDateTimeStamp =  startingDate.getTime() + 5 * 24 * 60 * 60 * 1000;
// let newDate = new Date(newDateTimeStamp);
// console.log(newDate);//output new Date('2025-05-31T07:20:00.000Z')


// Question 48
// 48. Calculate the user's age from their date of birth.
// let dob = new Date('2003-10-09');
// let CurrentDate = new Date();
// let age = CurrentDate.getFullYear() - dob.getFullYear();
// let MonthsDiff = CurrentDate.getMonth() - dob.getMonth();
// let DaysDiff = CurrentDate.getDay() - dob.getDay();
// let HoursDiff = CurrentDate.getHours() - dob.getHours();

// if (MonthsDiff < 0 || (MonthsDiff === 0 && DaysDiff < 0)) {
//     age--;
// }
// console.log(age); //output 21


// Question 44
// 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to centralize this logic in a utility?

// let date = new Date('2003-10-09T05:20:00Z');

// function formatDate(dateStr) {
//     let date = new Date(dateStr)
//     return date.toLocaleDateString('en-Pa', {
//         weekday: 'long',
//         month: 'short',
//         day: 'numeric',
//         year: 'numeric'
//     });
// }
// let formatedDate = formatDate(date)
// console.log(formatedDate); // output 'Thursday, Oct 9, 2003'

