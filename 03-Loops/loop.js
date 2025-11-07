//  console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// for(i = 1; i <= 100; i++){
//     console.log("first");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 10;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// first task perform after that check condition

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for of use string and object and answer always value
// let str = "Salman";
// for(let val of str){
//     console.log(val);
// }

// or

// let str = "Salman";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let users = ["salman","usman","ayan","maaz","moiz","ameez"];
// for(let val of users){
//     console.log(val)
// }

// for in use Object , Array and answer in key

// let str = "Salman";
// for(let key in str){
//     console.log(key);
// }

// let users = ["salman","usman","maaz","moiz"];
// for(let key in users){
//     console.log(key);
// }

// let name = {
//     name:"Salman",
//     age:24,
//     class:"WEB and App Development"
// };
// for(let key in name){
//     console.log(key);
// };

// so yaad rakay k in loop say index mil raha hai or of loop say value mil raah hai

// Challenge 1:
// Print all even number form 0 to 100;

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// Challenge 2:
// Calculate how many vowels and consonents are in a given string for of loop

// let string = "Muhammad Suleman";
// let vowelCount = 0, consonentCount = 0;
// for (let letter of string){
//     if(letter === 'a'|| letter === 'e'|| letter === 'i'|| letter === 'o'|| letter === 'u' || letter === 'A'|| letter === 'E'|| letter === 'I'|| letter === 'O'|| letter === 'U'){
//         vowelCount++;
//     }else if(letter === " "){
//         console.log("Space not Counted");
//     }else{
//         consonentCount++;
//     }
// }
// console.log(`'vowel' = ${vowelCount} `);
// console.log(`'consonent' =  ${consonentCount} `);

// Qno1:Calculate sum of first 'n' numbers
// let n = Number(prompt("Enter a Number : "));

// let sum = 0;
// for (i = 1; i <= n; i++) {
//   console.log(sum, i);
//   sum += i;           // sum = sum + 1
//   console.log(sum);
// }
// console.log(`Sum = ${sum}`);

// Qno2:Calculate the sum of numbers from 'm' to 'n'
// let m = Number(prompt("Enter Starting Number : "));
// let n = Number(prompt("Enter Ending Number : "));

// let sum = 0;
// for (i = m; i <= n; i++) {
//   console.log(sum, i);
//   sum += i;
//   console.log(sum);
// }
// console.log(`Sum = ${sum}`);

// Qno 3:Print all odd number from 0 to 'n'
// let n= Number(prompt("Enter a Number : "));
// for(i=1; i<=n; i++){
//     if(i%2 !== 0){
//         console.log("Odd Number",i);
//     }
// }

// or another way

// let n= Number(prompt("Enter a Number : "));
// for(i=1; i<=n; i++){
//     if(i%2 !== 0){
//         console.log("Odd Number",i);
//     }else{
//         console.log("Even Number",i);
//     }
// }

// Qno 4:Create a program 'Number Knock' game (ask the user to keep guessing the number unti the user enterrs correct guess)
// let comptuterNumber = 6;
// let guess = Number(prompt("Guess a Number Between 1 to 10 :"));

// if (isNaN(guess)) {
//   console.log("Please Enter a Valid Number");
// } else if (guess < comptuterNumber) {
//   console.log("Your gussed number is Too Low");
// } else if (guess > comptuterNumber) {
//   console.log("Too High");
// } else {
//   console.log("Congratulations! You Guessed it Right");
// }

// another way
// let computerNumber = 6;
// let guess;

// guess = Number(prompt("Guess a Number Between 1 to 10 :"));

// if (isNaN(guess)) {
//   alert("Number is Invalid, Please Try Again ");
// } else if (guess > computerNumber) {
//   alert("Number is too Low");
// } else if (guess < computerNumber) {
//   alert("Number is too High");
// } else {
//   alert("Congragulation Your Guess is Correct.", computerNumber);
// }

// another way

// let computerNumber = 6;
// let guess = null;
// while (guess !== computerNumber) {
//   guess = Number(prompt("Guess a Number Between 1 to 10 :"));

//   if (isNaN(guess)) {
//     alert("Number is Invalid, Please Try Again ");
//   } else if (guess < computerNumber) {
//     alert("Number is too Low");
//   } else if (guess > computerNumber) {
//     alert("Number is too High");
//   } else {
//     alert(`Congragulation Your Guess is ${computerNumber} are Correct . `);
//   }
// }

// another way

// let correctNumber = 7;
// let userGuess = Number(prompt("Guess a Number Between 1 to 10 : "));
// while(userGuess !== correctNumber){
//     console.log("Try Again");
//     userGuess = Number(prompt("Guess a Number Between 1 to 10 : "));
// }

// another way

// let computerNumber = 7;
// let guess;
// do{
//     guess = Number(prompt("Guess a Number Between 1 to 10 : "));
//     if(guess !== computerNumber){
//         console.log("Try Again");
//     }
// }while(guess !== computerNumber);
// console.log("Congratulations! You Guessed it Right");

// Qno5;Simple Password Chhecker (Fixed Attempts)

// let password = "alpha";
// let noOfAttempt = 0;
// let userPassword = null;

// while (password !== userPassword && noOfAttempt < 3) {
//   userPassword = prompt("Enter Your Password");
//   noOfAttempt++;

//   if (userPassword === password) {
//     alert("Congragulation your Password is Matched");
//   } else if (noOfAttempt >= 3) {
//     alert("Your attempt is over Soory :");
//   } else {
//     alert("Your Password is InCorrect : please try again");
//   }
// }
// another way
// Real-world example: ATM PIN verification
// In this example, the user has three attempts to enter the correct PIN. If they fail to do so, their account is locked for security reasons.

// let correctPIN = "1234";
// let attempts = 0;
// let enteredPIN = null;

// while (correctPIN !== enteredPIN && attempts < 3) {
//   enteredPIN = prompt("Enter your ATM PIN:");
//   attempts++;

//   if (enteredPIN === correctPIN) {
//     alert("Access granted. Welcome!");
//   } else if (attempts >= 3) {
//     alert("Account locked due to too many incorrect attempts.");
//   } else {
//     alert("Incorrect PIN. Please try again.");
//   }
// }

// another way
// let correctPIN = "1234";
// let attempts = 0;
// let enteredPIN;
// do {
//   enteredPIN = prompt("Enter your ATM PIN:");
//   attempts++;
//     if (enteredPIN === correctPIN) {
//     alert("Access granted. Welcome!");
//   } else if (attempts >= 3) {
//     alert("Account locked due to too many incorrect attempts.");
//   }
//     else {
//     alert("Incorrect PIN. Please try again.");
//     }
// } while (correctPIN !== enteredPIN && attempts < 3);
// End of code

// 6:
// 7:Print the following pathern(build it for nth numbers)

// Qno6:Create to program to find the factorial of 'n'
// let n = 4;
// let factorial = 1;

// for (i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`Factorial of ${n} is ${factorial}`);

// another way
// let n = Number(prompt("Enter a Number : "));
// let factorial = 1;
// for(i=1; i<=n; i++){
//     factorial *= i;   // factorial = factorial * i
// }
// console.log(`Factorial of ${n} is ${factorial}`);

// Qno7:Print the following pattern (build it for nth numbers)
// let n = 5;

// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// let n = 5;

// for(let i = 1; i <= n; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++){
//         str = str + j +" ";
//     }
//     console.log(str);
// }

// another ways
// let n = Number(prompt("Enter a Number : "));
// let string = "";
// for(i=1; i<=n; i++){
//     string += i + " ";
//     console.log(string);
// }
// End of code

// another way
// let n = Number(prompt("Enter a Number : "));
// for(i=1; i<=n; i++){
//     let string = "";
//     for(j=1; j<=i; j++){
//         string += j + " ";
//     }
//     console.log(string);
// }
// End of code

//  Qno8: Build a simple Text-Based Adventure Game
//  "You wake up in a dark forset.."
//  "Do you go 'left' or 'right' ? "

// "after choosing left: "

// "you walk into a swamp... "
// " You see something shiny in the mud. do you pick it up? (yes or no)"
// " If yes: "it is a magic stone! you are teleported to safety. you win !"
// " If no: "you sink slowly into the mud. Game over."

// " After choosing right"

// "You have a cave..."
// " do you enter the cave? (yes or no)"
// " if yes: " a dragon wake up and chases you away. you barely escaped! "
// " if no:"  you set up camp outside the cave. A peaceful night under the stars. you"
//  do you want to play again? (yes or no)"
// let playAgain = 'yes';

// while (playAgain === 'yes') {
//   alert("You wake up in the dark forest ");
//   let userChoice = prompt("Do you want to go left or right ? ");

//   if (userChoice === "left") {
//     alert("You see Something Shiny in the mud ! ");
//     userChoice = prompt("Do you pick it up ? (yes or no)");
//     if (userChoice === "yes") {
//       alert("it is a magical stone ! you are teleported to safety, you win ! ");
//     } else {
//       alert("mar gaya tu");
//     }
//   } else {
//     alert("You find the cave ! ");
//     userChoice = prompt("Do you enter the cave? (yes or no)");
//     if (userChoice === "yes") {
//       alert("you barely escape !");
//     } else {
//       alert("acha raat guzra apka");
//     }
//   }

//   userChoice = prompt("Do you want to paly again ?");

//   if(userChoice === 'no'){
//     playAgain = 'no';
//     alert("Thanks for playing !");
//   }
// }

// another way
// let playAgain = true;
// while(playAgain){
//     let choice = prompt("You wake up in a dark forest. Do you go 'left' or 'right' ? ").toLowerCase();
//     if(choice === "left"){
//         let swampChoice = prompt("You walk into a swamp... You see something shiny in the mud. Do you pick it up? (yes or no)").toLowerCase();
//         if(swampChoice === "yes"){
//             alert("It is a magic stone! You are teleported to safety. You win !");
//         }
//         else{
//             alert("You sink slowly into the mud. Game over.");
//         }
//     }
//     else if(choice === "right"){
//         let caveChoice = prompt("You have a cave... Do you enter the cave? (yes or no)").toLowerCase();
//         if(caveChoice === "yes"){
//             alert("A dragon wake up and chases you away. You barely escaped!");
//         }
//         else{
//             alert("You set up camp outside the cave. A peaceful night under the stars.");
//         }
//     }
//     else{
//         alert("Invalid choice. Please choose 'left' or 'right'.");
//     }
//     let again = prompt("Do you want to play again? (yes or no)").toLowerCase();
//     if(again !== "yes"){
//         playAgain = false;
//         alert("Thanks for playing! Goodbye.");
//     }
// }
// End of code

// another way
// let playAgain = true;
// while(playAgain){
//     let choice = prompt("You wake up in a dark forest. Do you go 'left' or 'right' ? ").toLowerCase();
//     if(choice === "left"){
//         let swampChoice = prompt("You walk into a swamp... You see something shiny in the mud. Do you pick it up? (yes or no)").toLowerCase();
//         if(swampChoice === "yes"){
//             alert("It is a magic stone! You are teleported to safety. You win !");
//         }
//         else{
//             alert("You sink slowly into the mud. Game over.");
// }
//     }
//     else if(choice === "right"){
//         let caveChoice = prompt("You have a cave... Do you enter the cave? (yes or no)").toLowerCase();
//         if(caveChoice === "yes"){
//             alert("A dragon wake up and chases you away. You barely escaped!");
//         }
//         else{
//             alert("You set up camp outside the cave. A peaceful night under the stars.");
//         }
//     }
//     else{
//         alert("Invalid choice. Please choose 'left' or 'right'.");
//     }
//     let again = prompt("Do you want to play again? (yes or no)").toLowerCase();
//     if(again !== "yes"){
//         playAgain = false;
//         alert("Thanks for playing! Goodbye.");
//     }
// }
// End of code

// another way
// Final version with input validation and structured function
// function playAdventureGame() {
//     let playAgain = true;
//     while (playAgain) {
//         const direction = prompt("You wake up in a dark forest. Do you go 'left' or 'right'?").trim().toLowerCase();

//         if (direction === "left") {
//             const swamp = prompt("You walk into a swamp... You see something shiny in the mud. Do you pick it up? (yes or no)").trim().toLowerCase();
//             if (swamp === "yes") {
//                 alert("It is a magic stone! You are teleported to safety. You win!");
//             } else if (swamp === "no") {
//                 alert("You sink slowly into the mud. Game over.");
//             } else {
//                 alert("Invalid choice. Please answer 'yes' or 'no'.");
//             }
//         } else if (direction === "right") {
//             const cave = prompt("You find a cave... Do you enter the cave? (yes or no)").trim().toLowerCase();
//             if (cave === "yes") {
//                 alert("A dragon wakes up and chases you away. You barely escaped!");
//             } else if (cave === "no") {
//                 alert("You set up camp outside the cave. A peaceful night under the stars.");
//             } else {
//                 alert("Invalid choice. Please answer 'yes' or 'no'.");
//             }
//         } else {
//             alert("Invalid direction. Please choose 'left' or 'right'.");
//         }

//         const again = prompt("Do you want to play again? (yes or no)").trim().toLowerCase();
//         playAgain = again === "yes";
//         if (!playAgain) alert("Thanks for playing! Goodbye.");
//     }
// }

// playAdventureGame();
