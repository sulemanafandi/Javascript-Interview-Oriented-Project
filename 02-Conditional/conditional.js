// Qno1: write a program to check if thte stock of a product is 0 if it is display the messege "product is out of stock"
// let ProductInStock = 0;

// if(ProductInStock <= 0){
//     console.log("Product is out of stock");
// }else{
//     console.log("Product is In Stock");
// }

// So conditional statement lets your cade make decision it check if something is true or false and then runs certain code based on that

// example
// let whether = "rainiy";

// if(whether === "rainiy"){
//     console.log("Take an Umberalla");
// }else{
//     console.log("Enjoy he Sunshine");
// }

//  tu javascript may decision ly saktay hai condional javascript k through

// 1: if Statment
// let temp = 31;
// if(temp > 30){
//     console.log("Hot");
// }

//2:if..else Statement//
// let temp = 15;
// if(temp =>30){
//     console.log("Hot");
// }else{
//     console.log("Cold")
// }

// 3: if..else..else..if Statement (Else-if ladder)
// let score = 98;
// if(score >= 95){
//     console.log("Top Rank");
// }else if(score >= 80){
//     console.log("1st Position");
// }else if(score >= 70){
//     console.log("2nd Position");
// }else if(score >= 60){
//     console.log("3rd Position");
// }else if(score >= 50){
//     console.log("4th Position");
// }else if(score >= 40){
//     console.log("5th Position");
// }else {
//     console.log("Soory Fail");
// }

//other logical operator
// let score = 46;
// if(score >= 95 && score <= 100){
//     console.log("Top Rank");
// }else if(score >= 80 && score <= 94){
//     console.log("1st Position");
// }else if(score >= 70 && score <= 79){
//     console.log("2nd Position");
// }else if(score >= 60 && score <= 69){
//     console.log("3rd Position");
// }else if(score >= 50 && score <= 59){
//     console.log("4th Position");
// }else if(score >= 40 && score <= 49){
//     console.log("5th Position");
// }else{
//     console.log("1st Position");
// }

// Nested if statement
// let user = 25;
// let IdCard = true;
// if (user >= 18) {
//   if (IdCard) {
//     console.log("You Allowed Club Enter");
//   } else {
//     console.log("Please being IdCard");
//   }
// } else {
//   console.log("You are too Young to Enter");
// }

// Other example no real world
// usefull us lie nahi hai useless hai k ap hacker ko bata rahy ho usernaem nahi dala ap suggest karlo password nahi dala
// let username = "salman";
// let passowrd = "123";

// let dbuseername = "salman";
// let dbPassword = "123";

// if (username) {
//   if (passowrd) {
//     if (username === dbuseername) {
//       if (passowrd === dbPassword) {
//         console.log("Successfully Login");
//       } else {
//         console.log("Password Not match");
//       }
//     } else {
//       console.log("Useranme is Not match");
//     }
//   }else{
//     console.log("Password is requried");
//   }
// }else{
//     console.log("username is required");
// };

// let username = "salman";
// let password = "123";

// let dbusername = "salman";
// let dbpassword = "123";

// if(username && password){
//     if(username === dbusername && password === dbpassword){
//         console.log("Successfully Login");
//     }else{
//         console.log("Invalid Credential");
//     }
// }else{
//     console.log("All field are required");
// }

// let username = "salman";
// let password = "123";

// let dbusername = "salman";
// let dbpassword = "123";

// if(username && password && username === dbusername && password === dbpassword){
//     console.log("Login SuccessFully");
// }else{
//     console.log("Please Correct value");
// };

// Swich statement

// let clr = "red";
// switch (clr){
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Caution Warning or slow");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Invalid No");
// };

// if-else Statement elegent syntax most use
// let age = 22;

// if(age >= 18){
//     console.log("you can drive");
// }else{
//     console.log("you can't drive");
// }

// One Trick
// project base short code

// let age = 22;

// if (age >= 18) console.log("you can drive");
// else console.log("you can not drive");

// Ternary use react coditional rendering
// syntax let result = condition ? true : false;
// let age = 12;
// let result =  age >= 18 ?  "Drive Car" : "Bike";
// console.log(result);

//  Challenge one
// Scenario our website teams discount based on the total shopping card amount
// Question:
// write a program where:
// Write if the cart value is less than $50 no discount is applied
// If the cart value is between $0 and $100 apply a 10% discount
// If the cart value is more than $100 applying a 20% discount
// Display the final cart total after the discount

// let card = 100;
// let discount;

// if(card > 100){
//     discount = card * 0.20;
// }else if(card >= 50 && card <= 100){
//     discount = card * 0.10;
// }else{
//     discount = 0;
// }

// let finalCardValue = card - discount;
// console.log(`Your Final Card Value is $${finalCardValue}`);

//  another way to solve this problem
/*
This approach is efficient because:
- It uses clear conditional logic for discount tiers.
- It avoids unnecessary calculations when no discount applies.
- It provides immediate feedback about the discount applied.
- It keeps the code readable and maintainable for real-world scenarios.
*/

// let cartValue = 524;
// let discountedCardValue ;

// if(cartValue < 50){
//     discountedCardValue = cartValue;
//     console.log("No Discount appplied! ");
// }else if(cartValue < 100){
//     discountedCardValue = cartValue - (cartValue * (10/100));
//     console.log("With Discount 10%");
// }else {
//     discountedCardValue = cartValue - (cartValue * (20/100));
//     console.log("With Discount 20%");
// }
// console.log(`Your cart value is : ${discountedCardValue.toFixed()}`);

// Final way to solve this problem
// Function to calculate discounted cart value
// function calculateDiscountedCartValue(cartValue) {
//     let discountRate = 0;

//     if (cartValue >= 100) {
//         discountRate = 0.20;
//         console.log("With 20% Discount");
//     } else if (cartValue >= 50) {
//         discountRate = 0.10;
//         console.log("With 10% Discount");
//     } else {
//         console.log("No Discount Applied");
//     }

//     const discountedValue = cartValue - (cartValue * discountRate);
//     console.log(`Your final cart value is: $${discountedValue.toFixed(2)}`);
//     return discountedValue;
// }

// calculateDiscountedCartValue(99);

// idea
// let result = (10/3);
// console.log(result);
// agr decimal k bad do value ahy tu tofixed use karay
// let result = (10/3);
// console.log(result.toFixed());
// agr point k bad 2 decimal chahiye tu us tara karo
// let result = (10/3);
// console.log(result.toFixed(2));

// literal
// let a = 5;
// let b = 5;
// let c = 5;
// let d = 5;
// let e = 5;
// console.log(`${a} ${b} `)

// Scenario : one of vadio streaming platform, verify user access to premium content
// Question:
//  write a program to check if a user has a valid subscription if the user has a subscription further check if the subscription is premium or standard

// If premium display, "Access to all content"
// If standard display "Access to limit content"
//  If standard display "Access to limit content"
//  If the user doesn't have a subscription, display "please subscription to access content"

// let hasSubscription = true;
// let subscriptionType = "Premium";

// if(hasSubscription){
// if (subscriptionType === "Premium") {
//   console.log("You have Access Of All Content ");
// } else if (subscriptionType === "Standard") {
//   console.log("You have Access to Limited Content ");
// } else {
//   console.log("unknown Subscription type");
// }

// }else{
//     console.log("Please Suscribe to access content");
// }

// another way to solve this problem
// let hasSubscription = false;
// let subscriptionType = "premium"; // standard

// if(hasSubscription){
//     if(subscriptionType === "premium"){
//         console.log("Access to all content");
//     }else{
//         console.log("Access to limit content");
//     }
// }else{
//     console.log("Please subscribe to access content");
// }

//  or
// let hasSubscription = true;
// let subscriptionType = "premium"; // standard
// console.log("Subscription status:", hasSubscription ? "Subscribed" : "Not Subscribed");
//or
// console.log("Subscription type:", hasSubscription ? subscriptionType : "None");
// or
// console.log(
//     hasSubscription
//         ? subscriptionType === "premium"
//             ? "Premium access granted"
//             : "Standard access granted"
//         : "No access"
// );

// another way to solve this problem
// let hasSubscription = true;
// let subscriptionType = "premium"; // standard

// if(hasSubscription && subscriptionType === "premium"){
//     console.log("Access to all content");
// }else if(hasSubscription && subscriptionType === "standard"){
//     console.log("Access to limit content");
// }else{
//     console.log("Please subscribe to access content");
// }

// another way to solve this problem
// let hasSubscription = false;
// let subscriptionType = "standard"; // premium

// if(hasSubscription){
//     if(subscriptionType === "premium"){
//         console.log("Access to all content");
//     }else{
//         console.log("Access to limit content");
//     }
// }else{
//     console.log("Please subscribe to access content");
// }

// another way to solve this problem
// let hasSubscription = true;
// let subscriptionType = "standard"; // premium

// if(!hasSubscription){
//     console.log("Please subscribe to access content");
// }else if(subscriptionType === "premium"){
//     console.log("Access to all content");
// }else{
//     console.log("Access to limit content");
// }

// another way to solve this problem
// let hasSubscription = true;
// let subscriptionType = "standard"; // premium

// if(!hasSubscription){
//     console.log("Please subscribe to access content");
//     return; // exit the function or stop further execution
// }

// if(subscriptionType === "premium"){
//     console.log("Access to all content");
// }else{
//     console.log("Access to limit content");
// }

// another way to solve this problem using ternary operator
// let hasSubscription = true;
// let subscriptionType = "premium"; // standard

// let result = !hasSubscription ? "Please subscribe to access content" : (subscriptionType === "premium" ? "Access to all content" : "Access to limit content");
// console.log(result);

// another way to solve this problem using switch statement
// let hasSubscription = true;
// let subscriptionType = "standard"; // premium

// if(!hasSubscription){
//     console.log("Please subscribe to access content");
// }else{
//     switch(subscriptionType){
//         case "premium":
//             console.log("Access to all content");
//             break;
//         case "standard":
//             console.log("Access to limit content");
//             break;
//         default:
//             console.log("Invalid subscription type");
//     }
// }

// Question 1: Give Choice to the user to select theme color and set the selected theme color and console it

// let color = "White";

// let theme = prompt(
//   "Enter your Theme Color (light, dark, pink, green) : "
// ).toLowerCase();

// if (theme === "light") {
//   color = "White";
// } else if (theme === "dark") {
//   color = "black";
// } else if (theme === "pink") {
//   color = "pink";
// } else if (theme === "green") {
//   color = "green";
// } else {
//   console.log("Invalid Color");
// }

// if (
//   theme !== "light" &&
//   theme !== "dark" &&
//   theme !== "pink" &&
//   theme !== "green"
// ) {
//   console.log("Invalid Color");
// } else {
//   console.log(
//     `Your Selected Theme is ${theme} and Color is ${color} respectivily ! `
//   );
// }

// Question 2: Find the smallest of three numbers. numbers are given by the user

// let num1 = Number(prompt("Enter Your Number 1: "));
// let num2 = Number(prompt("Enter Your Number 2: "));
// let num3 = Number(prompt("Enter Your Number 3: "));

// console.log(`Number of 1 is: ${num1}, Number of 2 is : ${num2}, Number of 3 is : ${num3}`);

// if (num1 < num2 && num1 < num3) {
//   console.log(`" ${num1} " Number 1 is Smallest`);
// } else if ( num2 < num3) {
//   console.log(`" ${num2} " Number 2 is Smallest`);
// } else {
//   console.log(`" ${num3} " Number 3 is Smallest`);
// }

// Question 3 : Write a program to manage Role Based Acess Control
// Given a user role {"admin": "editor": "viewer"}
// Admin :full access
// Editor : edit access
// Viewer : read-only
// Any other: no access
// use switch

// let role = "viewer";

// switch (role) {
//   case "admin":
//     console.log("Full Access Grented");
//     break;
//   case "editor":
//     console.log("Editor Access");
//     break;
//   case "viewer":
//     console.log("Read Only");
//     break;
//   default:
//     console.log("Invalid Role");
// }

//  Another way

// let role = prompt("Enter Your Role (admin, editor, viewer): ").toLowerCase();

// switch (role) {
//   case "admin":
//     console.log("Full Access Granted");
//     break;
//   case "editor":
//     console.log("Edit Access Granted");
//     break;
//   case "viewer":
//     console.log("Read-Only Access Granted");
//     break;
//   default:
//     console.log("No Access Granted");
// }

// Question 4 : check if number is divisible by 3 or 5 or both. print "fizz". for multiple of 3 "bizz". for multiple for 5 "feebizz" for both

// let num = 5;

// if  (num % 3 === 0 && num % 5 === 0){
//   console.log("FizzBizzz");
// } else if  (num % 3 === 0){
//   console.log("bizzz");
// } else if  (num % 5 === 0){
//   console.log("Fizz");
// } else {
//   console.log("Neither divisible by 3 nor 5");
// }

// another way to solve this problem
// let num = 15;

// if (num % 3 === 0 || num % 5 === 0) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBizz");
//   } else if (num % 3 === 0) {
//     console.log("Bizz");
//   } else {
//     console.log("Fizz");
//   }
// } else {
//   console.log("Number is not divisible by 3 or 5");
// }

// another way to solve this problem
// let num = 15;
// let result = (num % 3 === 0 ? (num % 5 === 0 ? "FizzBizz" : "Bizz") : (num % 5 === 0 ? "Fizz" : "Not Divisible by 3 or 5"));
// console.log(result);

// another way to solve this problem
// let num = 15;
// let result = (num % 3 === 0 && num % 5 === 0) ? "FizzBizz" : (num % 3 === 0 ? "Bizz" : (num % 5 === 0 ? "Fizz" : "Not Divisible by 3 or 5"));
// console.log(result);

// Question 5: create a sample calculator take two number and an operator plus minus multiply divide and calculate the result using switch

// let num1 = 23;
// let num2 = 7;
// let operator = "+";

// switch (operator) {
//   case "+":
//     console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//     break;
//     default:
//       console.log("Invalid Number...");
// }

// another way to solve this problem
// let num1 = 10;
// let num2 = 5;
// let operator = "/";

// switch (operator) {
//   case "+":
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     } else {
//       console.log("Error: Division by zero is not allowed.");
//     }
//     break;
//   default:
//     console.log("Invalid operator");
// }

// another way to solve this problem
// let num1 = 10;
// let num2 = 5;
// let operator = "/";

// if (operator === "+") {
//   console.log(`${num1} + ${num2} = ${num1 + num2}`);
// } else if (operator === "-") {
//   console.log(`${num1} - ${num2} = ${num1 - num2}`);
// } else if (operator === "*") {
//   console.log(`${num1} * ${num2} = ${num1 * num2}`);
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);
//   } else {
//     console.log("Error: Division by zero is not allowed.");
//   }
// } else {
//   console.log("Invalid operator");
// }

// another way to solve this problem
// let num1 = 10;
// let num2 = 5;
// let operator = "/";

// let result;

// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     result = num1 / num2;
//   } else {
//     console.log("Error: Division by zero is not allowed.");
//   }
// } else {
//   console.log("Invalid operator");
// }

// if (result !== undefined) {
//   console.log(`Result: ${result}`);
// }

// another way to solve this problem
// let num1 = 10;
// let num2 = 5;
// let operator = "/";

// let result = operator === "+" ? num1 + num2 :
//              operator === "-" ? num1 - num2 :
//              operator === "*" ? num1 * num2 :
//              operator === "/" ? (num2 !== 0 ? num1 / num2 : "Error: Division by zero is not allowed.") :
//              "Invalid operator";

// console.log(`Result: ${result}`);

// Questiom 6: Create a simple ATM program
// User can Choose:
// 1:Check Balance
// 2: Deposite
// 3: With draw
// 4: Exit
// Note: Set that in case of"Deposit" if deposit amount is less then 1Rs produce error otherwise deposit the amount and  show the messege with a new balance.And in case of "withdraw" if withdraw amount is greater than balance then or less than 1Rs than produce error otherwise withdraw amount and show remaining balance

// let totalBalance = 10000;

// let usersChoice = Number(
//   prompt(
//     "Enter Your Choice [1. Check Balance 2.Deposite 3.With draw 4.Exit ]: "
//   )
// );

// if (usersChoice === 1) {
//   console.log("Your Current Balance is : ", totalBalance);
// } else if (usersChoice === 2) {
//   let depositAmount = Number(prompt("Enter Amount to deposit: "));
//   if (depositAmount) {
//     totalBalance += depositAmount;
//     console.log("Deposit Successfull !");
//     console.log("Your Current Balance is : ", totalBalance);
//   } else {
//     console.log("Please Enter a valid deposite amount ");
//   }
// } else if (usersChoice === 3) {
//   let withdrawAmount = Number(prompt("Enter Amount to withdrawAmount :"));
//   if (withdrawAmount > 0 && withdrawAmount <= totalBalance) {
//     totalBalance -= withdrawAmount;
//     console.log("withdraw Successfull !");
//     console.log("Your Current Balance is : ", totalBalance);
//   } else {
//     console.log("Please enter a valid withdraw amount.");
//   }
// } else {
//   console.log("Thanks Your Comming ...");
// }

// another way to solve this problem
// let balance = 1000;
// let isRunning = true;

// while (isRunning) {
//   let choice = prompt(
//     "ATM Menu:\n1: Check Balance\n2: Deposit\n3: Withdraw\n4: Exit\nEnter your choice (1-4):"
//   );

//   switch (choice) {
//     case "1":
//       console.log(`Your current balance is Rs.${balance}`);
//       break;
//     case "2":
//       let depositAmount = Number(prompt("Enter deposit amount:"));
//       if (depositAmount < 1 || isNaN(depositAmount)) {
//         console.log("Error: Deposit amount must be at least Rs.1");
//       } else {
//         balance += depositAmount;
//         console.log(`Deposit successful! New balance: Rs.${balance}`);
//       }
//       break;
//     case "3":
//       let withdrawAmount = Number(prompt("Enter withdraw amount:"));
//       if (withdrawAmount < 1 || isNaN(withdrawAmount)) {
//         console.log("Error: Withdraw amount must be at least Rs.1");
//       } else if (withdrawAmount > balance) {
//         console.log("Error: Insufficient balance.");
//       } else {
//         balance -= withdrawAmount;
//         console.log(`Withdraw successful! Remaining balance: Rs.${balance}`);
//       }
//       break;
//     case "4":
//       console.log("Thank you for using the ATM. Goodbye!");
//       isRunning = false;
//       break;
//     default:
//       console.log("Invalid choice. Please select a valid option.");
//   }
// }

// another way to solve this problem
// let totalBalance = 10000;

// const showMenu = () => {
//     return Number(
//         prompt(
//             "ATM Menu:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\nEnter your choice (1-4):"
//         )
//     );
// };

// const deposit = () => {
//     const amount = Number(prompt("Enter amount to deposit:"));
//     if (amount >= 1 && !isNaN(amount)) {
//         totalBalance += amount;
//         console.log(`Deposit successful! New balance: Rs.${totalBalance}`);
//     } else {
//         console.log("Error: Deposit amount must be at least Rs.1");
//     }
// };

// const withdraw = () => {
//     const amount = Number(prompt("Enter amount to withdraw:"));
//     if (amount < 1 || isNaN(amount)) {
//         console.log("Error: Withdraw amount must be at least Rs.1");
//     } else if (amount > totalBalance) {
//         console.log("Error: Insufficient balance.");
//     } else {
//         totalBalance -= amount;
//         console.log(`Withdraw successful! Remaining balance: Rs.${totalBalance}`);
//     }
// };

// const checkBalance = () => {
//     console.log(`Your current balance is Rs.${totalBalance}`);
// };

// const exitATM = () => {
//     console.log("Thank you for using the ATM. Goodbye!");
// };

// const runATM = () => {
//     let running = true;
//     while (running) {
//         const choice = showMenu();
//         switch (choice) {
//             case 1:
//                 checkBalance();
//                 break;
//             case 2:
//                 deposit();
//                 break;
//             case 3:
//                 withdraw();
//                 break;
//             case 4:
//                 exitATM();
//                 running = false;
//                 break;
//             default:
//                 console.log("Invalid choice. Please select a valid option."); 
//         }
//     }
// };

// runATM();
